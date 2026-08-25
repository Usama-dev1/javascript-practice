import { NextResponse } from "next/server";
import { getLinks, saveLinks } from "@/lib/links";

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const links = await getLinks();
  const remainingLinks = links.filter((link) => link.id !== id);

  if (remainingLinks.length === links.length) {
    return NextResponse.json({ error: "Link not found" }, { status: 404 });
  }

  await saveLinks(remainingLinks);
  return new NextResponse(null, { status: 204 });
}