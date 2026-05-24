import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Github, Twitch, Globe, ShoppingBag } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile · nazrOS" },
      { name: "description", content: "Аватар, подключённые аккаунты, инвентарь и достижения." },
      { property: "og:title", content: "Profile · nazrOS" },
      { property: "og:description", content: "Профиль пользователя nazrOS." },
    ],
  }),
  component: ProfilePage,
});

const accounts = [
  { name: "GitHub", handle: "@nazr-os", icon: Github },
  { name: "Twitch", handle: "@nazr.os", icon: Twitch },
  { name: "Darknet", handle: "node://4a82…", icon: Globe },
];

const inventory = [
  { name: "Neurochip X-9", tier: "S" },
  { name: "VEX-02", tier: "A" },
  { name: "Aurora visor", tier: "A" },
  { name: "Vermillion arm", tier: "S" },
  { name: "ICE-breaker v2", tier: "B" },
  { name: "Dream patch", tier: "C" },
];

const achievements = [
  { name: "Первый имплант", date: "12.03.2089" },
  { name: "Финалист Nexus Pro", date: "08.07.2090" },
  { name: "Hack the Spire · gold", date: "20.08.2090" },
  { name: "1M XP", date: "01.09.2090" },
];

function ProfilePage() {
  const { t } = useI18n();
  return (
  <PageShell
  eyebrow={t("profile.eyebrow")}
  title="@f00rtime"
  subtitle={t("profile.subtitle")}
>
      <div className="grid lg:grid-cols-[280px_1fr] gap-6">
        {/* Avatar card */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="hud-corners p-6 border border-border bg-surface/50 backdrop-blur"
        >
          <div className="relative aspect-square neon-border-cyan overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 35%, oklch(0.7 0.28 305 / 0.6), oklch(0.13 0.04 290) 70%)",
              }}
            />
            <div className="absolute inset-0 hud-grid opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center font-display text-7xl neon-text-violet">
              N
            </div>
            <div className="absolute bottom-2 left-2 right-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex justify-between">
              <span>id · 4a82</span>
              <span className="neon-text-acid">● online</span>
            </div>
          </div>
          <div className="mt-4 space-y-1.5 text-sm font-mono">
            <div className="flex justify-between">
              <span className="text-muted-foreground">XP</span>
              <span className="neon-text-cyan">482 300</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Rank</span>
              <span className="neon-text-violet">Архитектор</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Joined</span>
              <span>12.03.2089</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {/* Accounts */}
          <section className="hud-corners p-6 border border-border bg-surface/40 backdrop-blur">
            <div className="font-display text-sm tracking-widest neon-text-violet mb-4">
              {t("profile.accounts")}
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {accounts.map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.name}
                    className="flex items-center gap-3 p-3 border border-border bg-background/40 hover:neon-border-cyan transition"
                  >
                    <Icon size={18} className="neon-text-cyan" />
                    <div>
                      <div className="font-display text-xs uppercase tracking-widest">
                        {a.name}
                      </div>
                      <div className="font-mono text-[11px] text-muted-foreground">
                        {a.handle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Inventory */}
          <section className="hud-corners p-6 border border-border bg-surface/40 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag size={14} className="neon-text-cyan" />
              <div className="font-display text-sm tracking-widest neon-text-violet">
                {t("profile.inventory")}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {inventory.map((it) => (
                <div
                  key={it.name}
                  className="relative p-3 border border-border bg-background/40 hover:neon-border transition"
                >
                  <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center font-display text-xs neon-text-acid border border-neon-acid">
                    {it.tier}
                  </div>
                  <div className="font-display text-sm pr-8">{it.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="hud-corners p-6 border border-border bg-surface/40 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={14} className="neon-text-acid" />
              <div className="font-display text-sm tracking-widest neon-text-violet">
                {t("profile.achievements")}
              </div>
            </div>
            <ul className="divide-y divide-border">
              {achievements.map((a) => (
                <li key={a.name} className="py-2.5 flex justify-between text-sm">
                  <span className="font-display">{a.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{a.date}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
