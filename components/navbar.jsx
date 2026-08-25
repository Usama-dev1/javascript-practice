"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const linkClass = (path) =>
    pathname === path
      ? "text-sm text-white underline underline-offset-8"
      : "text-sm text-neutral-300 hover:text-white";
  return (
    <header className="border-b border-neutral-800 bg-neutral-950 text-white">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-xl font-black tracking-tight">
          Link<span className="text-neutral-500">Short</span>
        </Link>
        <div className="hidden items-center gap-8 sm:flex">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/contactus" className={linkClass("/contactus")}>
            Contact Us
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-neutral-700 px-3 py-2 text-sm text-neutral-300 hover:border-white hover:text-white sm:hidden"
        >
          Menu
        </button>
      </nav>
      {open && (
        <div className="border-t border-neutral-800 px-5 py-4 sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={linkClass("/")}
            >
              Home
            </Link>
            <Link
              href="/contactus"
              onClick={() => setOpen(false)}
              className={linkClass("/contactus")}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
