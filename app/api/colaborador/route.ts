import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabase } from "@/lib/supabase";

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "softiahouse@gmail.com";

const OFICIOS = [
  "Electricista",
  "Fontanero",
  "Pintor",
  "Jardinero",
  "Albañil",
  "Limpieza",
  "Manitas",
  "Otro",
];

// Escapa texto do usuário antes de pôr no HTML do e-mail.
function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .slice(0, 2000);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nombre,
      telefono,
      oficio,
      zona,
      autonomo,
      experiencia,
      disponibilidad,
      enlace,
      mensaje,
      consentimiento,
      website, // campo-armadilha anti-spam: pessoas não preenchem
    } = body ?? {};

    if (website) return NextResponse.json({ success: true });

    if (!nombre || !telefono || !oficio || !zona || consentimiento !== true) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }
    if (!OFICIOS.includes(oficio)) {
      return NextResponse.json({ error: "Oficio no válido" }, { status: 400 });
    }

    const registro = {
      nombre: String(nombre).slice(0, 120),
      telefono: String(telefono).slice(0, 40),
      oficio,
      zona: String(zona).slice(0, 120),
      autonomo: autonomo ? String(autonomo).slice(0, 40) : null,
      experiencia: experiencia ? String(experiencia).slice(0, 40) : null,
      disponibilidad: disponibilidad ? String(disponibilidad).slice(0, 200) : null,
      enlace: enlace ? String(enlace).slice(0, 300) : null,
      mensaje: mensaje ? String(mensaje).slice(0, 1500) : null,
      consentimiento: true,
    };

    // Guarda no Supabase se a tabela existir (falha não bloqueia o e-mail).
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from("colaboradores").insert(registro);
      if (error) console.warn("colaboradores insert:", error.message);
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set — colaborador recebido (sem e-mail)");
      return NextResponse.json({ success: true });
    }

    const tel = registro.telefono.replace(/\D/g, "");
    const filas: [string, string | null][] = [
      ["👤 Nombre", registro.nombre],
      ["📱 WhatsApp", registro.telefono],
      ["🛠️ Oficio", registro.oficio],
      ["📍 Zona", registro.zona],
      ["🧾 Autónomo / empresa", registro.autonomo],
      ["⏳ Experiencia", registro.experiencia],
      ["🗓️ Disponibilidad", registro.disponibilidad],
      ["🔗 Fotos / enlace", registro.enlace],
      ["💬 Mensaje", registro.mensaje],
    ];

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "ClaveHogar Colaboradores <leads@clavehogar.es>",
      to: [NOTIFY_EMAIL],
      subject: `🛠️ Nuevo colaborador: ${registro.oficio} — ${registro.zona}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8faff; padding: 32px; border-radius: 16px;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">🗝️ ClaveHogar — Nuevo colaborador</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0;">Registro desde /trabaja-con-nosotros</p>
          </div>
          <div style="background: white; border-radius: 12px; padding: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${filas
                .filter(([, v]) => v)
                .map(
                  ([k, v]) => `<tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #666; font-size: 14px; width: 170px; vertical-align: top;">${k}</td>
                <td style="padding: 8px 0; color: #1a2340; font-size: 14px;">${esc(v)}</td>
              </tr>`
                )
                .join("")}
            </table>
          </div>
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://wa.me/${tel}" style="background: #25D366; color: white; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 15px; display: inline-block;">💬 Escribir por WhatsApp</a>
          </div>
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 24px;">
            El colaborador aceptó que ClaveHogar guarde sus datos para contactarle sobre trabajos.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API colaborador error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
