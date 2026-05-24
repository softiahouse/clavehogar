import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "softiahouse@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, email, telefone, servico, mensagem } = body;

    if (!nome || !email || !telefone) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "ClaveHogar Leads <leads@clavehogar.es>",
      to: [NOTIFY_EMAIL],
      replyTo: email,
      subject: `🏠 Nuevo lead: ${nome} — ${servico}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8faff; padding: 32px; border-radius: 16px;">
          <div style="background: linear-gradient(135deg, #4FA3D8, #2B87C5); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">🗝️ ClaveHogar — Nuevo Lead</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Alguien ha solicitado información</p>
          </div>

          <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <h2 style="color: #1a2340; font-size: 16px; margin: 0 0 16px;">📋 Datos del contacto</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px; width: 140px;">👤 Nombre</td>
                <td style="padding: 8px 0; color: #1a2340; font-weight: bold; font-size: 14px;">${nome}</td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #666; font-size: 14px;">📧 Email</td>
                <td style="padding: 8px 0; color: #1a2340; font-size: 14px;"><a href="mailto:${email}" style="color: #4FA3D8;">${email}</a></td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #666; font-size: 14px;">📱 Teléfono</td>
                <td style="padding: 8px 0; color: #1a2340; font-size: 14px;"><a href="https://wa.me/${telefone.replace(/\D/g, '')}" style="color: #25D366;">${telefone}</a></td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #666; font-size: 14px;">🏠 Servicio</td>
                <td style="padding: 8px 0; font-size: 14px;"><span style="background: #E8F4FD; color: #2B87C5; padding: 4px 10px; border-radius: 20px; font-weight: bold;">${servico}</span></td>
              </tr>
              ${mensagem ? `
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #666; font-size: 14px; vertical-align: top;">💬 Mensaje</td>
                <td style="padding: 8px 0; color: #1a2340; font-size: 14px;">${mensagem}</td>
              </tr>
              ` : ""}
            </table>
          </div>

          <div style="text-align: center; margin-top: 16px;">
            <a href="https://wa.me/${telefone.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(nome)}!%20Soy%20del%20equipo%20ClaveHogar.%20Vi%20tu%20solicitud%20sobre%20${encodeURIComponent(servico)}.%20%C2%BFCu%C3%A1ndo%20podemos%20hablar%3F"
               style="background: #25D366; color: white; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 15px; display: inline-block;">
              💬 Responder por WhatsApp
            </a>
          </div>

          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 24px;">
            ClaveHogar • Torrevieja, Alicante • clavehogar.es
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error al enviar email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
