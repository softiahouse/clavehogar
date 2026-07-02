"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setShow(false);
    setDeferredPrompt(null);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="flex items-center gap-3 bg-white border border-amber-200 shadow-xl rounded-2xl px-5 py-3">
        <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-white text-lg shrink-0">
          🗝️
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">Instalar ClaveHogar</p>
          <p className="text-xs text-slate-500">Acceso rápido desde tu móvil</p>
        </div>
        <div className="flex items-center gap-2 ml-2">
          <button
            onClick={handleInstall}
            className="bg-amber-400 hover:bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all"
          >
            Instalar
          </button>
          <button
            onClick={() => setShow(false)}
            className="text-slate-400 hover:text-slate-600 p-1"
            aria-label="Cerrar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
