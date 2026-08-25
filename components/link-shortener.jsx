"use client";

import { useState } from "react";
import LinkForm from "@/components/link-form";
import LinkList from "@/components/link-list";
import useLinks from "@/hooks/use-links";

export default function LinkShortener() {
  const [url, setUrl] = useState("");
  const [copiedSlug, setCopiedSlug] = useState("");
  const [copyError, setCopyError] = useState("");
  const { links, create, remove } = useLinks();

  async function copyLink(link) {
    try {
      await navigator.clipboard.writeText(
        link.shortUrl || `${window.location.origin}/${link.slug}`,
      );
      setCopyError("");
      setCopiedSlug(link.slug);
      setTimeout(() => setCopiedSlug(""), 1500);
    } catch {
      setCopyError("Could not copy the link. Please copy it manually.");
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-5 py-12 text-neutral-950 sm:py-20">
      <section className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
          Link shortener
        </p>
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
          Shorten Long Links.
        </h1>
        <p className="mt-3 max-w-xl text-neutral-400">
          Turn a long URL into a link you can share anywhere.
        </p>
        <LinkForm url={url} setUrl={setUrl} create={create} />
        {copyError && <p className="mt-3 text-sm text-red-400">{copyError}</p>}
        <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-800 bg-white shadow-xl">
          <div className="border-b border-neutral-200 px-5 py-4 font-bold">
            Your links
          </div>
          <LinkList
            links={links}
            copiedSlug={copiedSlug}
            copyLink={copyLink}
            remove={remove}
          />
        </div>
      </section>
    </main>
  );
}
