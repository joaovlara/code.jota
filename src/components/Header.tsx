"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation, socialLinks } from "@/data/data.texts";
import type { NavigationItem, SocialLink } from "@/types/type";
import HeaderAnimation from "./Animation/HeaderAnimation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    // Fechar menu mobile se estiver aberto
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative inset-x-0 top-0 z-50 text-stone-500">
      {/* Desktop menu */}
      <HeaderAnimation>
        <nav
          aria-label="Global"
          className="flex items-center justify-between md:p-10 p-6 border-b"
        >
        <div className="flex lg:flex-1">
          <a 
            href="#hero" 
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="-m-1.5 p-1.5 cursor-pointer"
          >
            <span className="">DEV Front-End</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item: NavigationItem) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-sm/6 font-semibold hover:textcolor-primary transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {socialLinks.map((social: SocialLink, idx: number) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center${
                  idx !== 0 ? " ml-4" : ""
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="ml-2">{social.name}</span>
              </a>
            );
          })}
        </div>
      </nav>
      </HeaderAnimation>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10 bg-stone-900">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1 p-1">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2 rounded-md p-2"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6 ">
                {navigation.map((item: NavigationItem) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 flex flex-col gap-4">
                {socialLinks.map((social: SocialLink, idx: number) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center${
                        idx !== 0 ? " mt-2" : ""
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                      <span className="ml-2">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
