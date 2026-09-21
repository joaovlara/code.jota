"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/data/data.texts";
import HeaderAnimation from "./Animation/HeaderAnimation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-brand-light/15 bg-brand-dark">
      <HeaderAnimation>
        <nav
          aria-label="Navegação principal"
          className="site-container flex min-h-20 items-center justify-between gap-6"
        >
          <a
            href="#hero"
            onClick={(event) => handleSmoothScroll(event, "#hero")}
            className="flex items-center gap-2 text-lg font-semibold tracking-[-0.04em] text-brand-light"
          >
            <span aria-hidden="true" className="text-brand-teal">
              &lt;/&gt;
            </span>
            code.JOTA
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => handleSmoothScroll(event, item.href)}
                className="ui-label text-brand-light/75 transition hover:text-brand-teal"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(event) => handleSmoothScroll(event, "#contact")}
            className="hidden rounded-full border border-brand-light/30 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-light transition hover:border-brand-teal hover:text-brand-teal lg:inline-flex"
          >
            Vamos conversar
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex rounded-full border border-brand-light/25 p-2 text-brand-light lg:hidden"
            aria-label="Abrir menu"
          >
            <Bars3Icon className="size-6" />
          </button>
        </nav>
      </HeaderAnimation>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div
          className="fixed inset-0 z-50 bg-brand-dark/70"
          aria-hidden="true"
        />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-brand-yellow p-6 text-brand-dark">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold tracking-[-0.04em]">
              <span className="text-brand-red">&lt;/&gt;</span> code.JOTA
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full border border-brand-dark/30 p-2"
              aria-label="Fechar menu"
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => handleSmoothScroll(event, item.href)}
                className="border-b border-brand-dark/20 pb-4 text-3xl font-extrabold uppercase tracking-[-0.05em]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(event) => handleSmoothScroll(event, "#contact")}
            className="mt-auto text-sm font-bold uppercase tracking-[0.12em]"
          >
            Me conte sua ideia →
          </a>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
