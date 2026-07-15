"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

// ── Types ──────────────────────────────────────────────────────────
type Stage = "new" | "contacted" | "meeting" | "proposal" | "won" | "lost";

interface Prospect {
  id: string;
  nome: string;
  telefone: string | null;
  tipo: string | null;
  stage: Stage;
  notas: string | null;
  created_at: string;
}

interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  mensagem: string | null;
  created_at: string;
}

// ── Stages ─────────────────────────────────────────────────────────
const STAGES: { key: Stage; label: string; color: string; bg: string }[] = [
  { key: "new",       label: "Novo",        color: "#8b8bff", bg: "#8b8bff20" },
  { key: "contacted", label: "Contactado",  color: "#facc15", bg: "#facc1520" },
  { key: "meeting",   label: "Reunião",     color: "#60a5fa", bg: "#60a5fa20" },
  { key: "proposal",  label: "Proposta",    color: "#f97316", bg: "#f9731620" },
  { key: "won",       label: "Fechado ✓",  color: "#4ade80", bg: "#4ade8020" },
  { key: "lost",      label: "Perdido",     color: "#f87171", bg: "#f8717120" },
];

// ── Main ───────────────────────────────────────────────────────────
export default function CrmPage() {
  const [tab, setTab] = useState<"pipeline" | "leads">("pipeline");
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [dragging, setDragging] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newType, setNewType] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const loadProspects = useCallback(async () => {
    const r = await fetch("/api/crm/prospects");
    if (r.ok) setProspects(await r.json());
  }, []);

  const loadLeads = useCallback(async () => {
    const r = await fetch("/api/crm/leads");
    if (r.ok) setLeads(await r.json());
  }, []);

  useEffect(() => {
    loadProspects();
  }, [loadProspects]);

  useEffect(() => {
    if (tab === "leads") loadLeads();
  }, [tab, loadLeads]);

  async function moveStage(id: string, stage: Stage) {
    setProspects((prev) => prev.map((p) => p.id === id ? { ...p, stage } : p));
    await fetch("/api/crm/prospects", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, stage }),
    });
  }

  async function addProspect() {
    if (!newName.trim()) return;
    setSaving(true);
    const r = await fetch("/api/crm/prospects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: newName, telefone: newPhone || null, tipo: newType || null, stage: "new" }),
    });
    if (r.ok) {
      const p = await r.json();
      setProspects((prev) => [p, ...prev]);
      setNewName(""); setNewPhone(""); setNewType(""); setShowAdd(false);
    }
    setSaving(false);
  }

  async function logout() {
    await fetch("/api/crm/auth", { method: "DELETE" });
    router.push("/crm/login");
  }

  const grouped = STAGES.map((s) => ({
    ...s,
    items: prospects.filter((p) => p.stage === s.key),
  }));

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center text-lg">🗝️</div>
          <div>
            <h1 className="font-bold text-white leading-none">ClaveHogar CRM</h1>
            <p className="text-xs text-slate-400">Prospecção & Leads</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="text-xs text-slate-400 hover:text-white transition">← Site</a>
          <button onClick={logout} className="text-xs text-slate-500 hover:text-white transition">Sair</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 pt-5 flex items-center gap-1 border-b border-slate-800">
        {[
          { key: "pipeline", label: "🏢 Agências" },
          { key: "leads",    label: "📥 Leads do Site" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as typeof tab)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-all ${
              tab === t.key
                ? "border-amber-400 text-amber-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}

        {tab === "pipeline" && (
          <button
            onClick={() => setShowAdd(true)}
            className="ml-auto mb-1 bg-amber-400 hover:bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
          >
            + Adicionar agência
          </button>
        )}
      </div>

      {/* ── PIPELINE ── */}
      {tab === "pipeline" && (
        <div className="p-6 overflow-x-auto">
          {prospects.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p className="text-4xl mb-3">🏢</p>
              <p className="text-sm">Nenhuma agência ainda.</p>
              <button
                onClick={() => setShowAdd(true)}
                className="mt-4 bg-amber-400 hover:bg-amber-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition"
              >
                Adicionar a primeira agência
              </button>
            </div>
          ) : (
            <div className="flex gap-4 min-w-max pb-2">
              {grouped.map((stage) => (
                <div
                  key={stage.key}
                  className="w-60 flex-shrink-0"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (dragging) moveStage(dragging, stage.key);
                    setDragging(null);
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: stage.color }} />
                    <span className="text-xs font-semibold text-slate-300">{stage.label}</span>
                    <span className="text-xs text-slate-500 ml-auto">{stage.items.length}</span>
                  </div>

                  <div
                    className="min-h-24 rounded-xl p-2 space-y-2 transition-colors"
                    style={{ background: stage.items.length ? stage.bg : "rgba(255,255,255,0.02)" }}
                  >
                    {stage.items.map((p) => (
                      <div
                        key={p.id}
                        draggable
                        onDragStart={() => setDragging(p.id)}
                        className="bg-slate-800 border border-slate-700 rounded-xl p-3 cursor-grab hover:border-slate-500 transition-all group"
                      >
                        <p className="text-sm font-semibold text-white leading-tight">{p.nome}</p>
                        {p.tipo && (
                          <p className="text-xs text-slate-400 mt-0.5">{p.tipo}</p>
                        )}
                        {p.telefone && (
                          <div className="flex items-center gap-2 mt-2">
                            <a
                              href={`https://wa.me/${p.telefone.replace(/\D/g, "")}?text=Hola!%20Somos%20ClaveHogar%20en%20Torrevieja.%20%C2%BFTrab%C3%A1j%C3%A1is%20con%20propietarios%20que%20necesiten%20operaciones%20en%20terreno%3F`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300 transition"
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                              </svg>
                              WhatsApp
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── LEADS DO SITE ── */}
      {tab === "leads" && (
        <div className="p-6">
          {leads.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p className="text-4xl mb-3">📥</p>
              <p className="text-sm">Nenhum lead ainda. Quando alguém preencher o formulário do site, aparece aqui.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {leads.map((l) => (
                <div key={l.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-400/20 border border-amber-400/30 rounded-xl flex items-center justify-center text-amber-400 font-bold text-sm flex-shrink-0">
                    {l.nome.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-white text-sm">{l.nome}</p>
                      <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">{l.servico}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-xs text-slate-400 flex-wrap">
                      <span>{l.email}</span>
                      <span>{l.telefone}</span>
                      <span>{new Date(l.created_at).toLocaleDateString("pt-PT", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}</span>
                    </div>
                    {l.mensagem && (
                      <p className="text-xs text-slate-400 mt-1 italic">&ldquo;{l.mensagem}&rdquo;</p>
                    )}
                  </div>
                  <a
                    href={`https://wa.me/${l.telefone.replace(/\D/g, "")}?text=Hola%20${encodeURIComponent(l.nome)}!%20Soy%20del%20equipo%20ClaveHogar.%20Vi%20tu%20solicitud%20sobre%20${encodeURIComponent(l.servico)}.%20%C2%BFCu%C3%A1ndo%20podemos%20hablar%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Responder
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── MODAL ADICIONAR ── */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4" onClick={() => setShowAdd(false)}>
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-bold text-white mb-4">Adicionar Agência</h3>
            <div className="space-y-3">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Nome da agência *"
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="Telefone / WhatsApp"
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                placeholder="Tipo (ex: Gestão Airbnb, Imobiliária)"
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div className="flex gap-2 mt-5">
              <button onClick={() => setShowAdd(false)} className="flex-1 text-sm text-slate-400 hover:text-white py-2.5 rounded-xl border border-slate-600 transition">
                Cancelar
              </button>
              <button onClick={addProspect} disabled={!newName.trim() || saving} className="flex-1 bg-amber-400 hover:bg-amber-500 disabled:opacity-50 text-white text-sm font-semibold py-2.5 rounded-xl transition">
                {saving ? "Guardando..." : "Adicionar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
