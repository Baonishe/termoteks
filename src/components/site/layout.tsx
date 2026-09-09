import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-paper text-ink">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
