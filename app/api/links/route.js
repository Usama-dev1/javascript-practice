import { NextResponse } from "next/server";
import { getLinks, saveLinks } from "@/lib/links";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const links = await getLinks();
  return NextResponse.json(links.map((link) => addShortUrl(link, request.url)));
}

function addShortUrl(link, requestUrl) {
  const origin = requestUrl ? new URL(requestUrl).origin : "";
  return { ...link, shortUrl: `${origin}/${link.slug}` };
}

export async function POST(request) {
  const body = await request.json();
  const url = body.url?.trim();

  // URL validation keeps malformed values out of the JSON database.
  if (!url) {
    return NextResponse.json({ error: "A URL is required" }, { status: 400 });
  }

  try {
    const parsedUrl = new URL(url);
    if (!["http:", "https:"].includes(parsedUrl.protocol)) throw new Error();
  } catch {
    return NextResponse.json(
      { error: "Enter a valid http(s) URL" },
      { status: 400 },
    );
  }

  const links = await getLinks();
  let slug = Math.random().toString(36).slice(2, 8);
  //check if slug exists generate new
  while (links.some((link) => link.slug === slug)) {
    slug = Math.random().toString(36).slice(2, 8);
  }

  const link = {
    id: crypto.randomUUID(),
    slug,
    url,
    clicks: 0,
    createdAt: new Date().toISOString(),
  };

  await saveLinks([link, ...links]);
  return NextResponse.json(addShortUrl(link, request.url), { status: 201 });
}
