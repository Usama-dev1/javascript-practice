import { redirect } from "next/navigation";
import { getLinks, saveLinks } from "@/lib/links";

export async function GET(_request, { params }) {
  const { slug } = await params;
  const links = await getLinks();
  const link = links.find((item) => item.slug === slug);

  if (!link) return new Response("Short link not found", { status: 404 });

  link.clicks += 1;
  await saveLinks(links);
  redirect(link.url);
}