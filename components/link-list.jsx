export default function LinkList({ links, copiedSlug, copyLink, remove }) {
  if (links.isPending)
    return <p className="p-5 text-neutral-500">Loading links...</p>;
  if (links.isError)
    return <p className="p-5 text-red-600">Could not load your links.</p>;
  if (links.data?.length === 0)
    return (
      <p className="p-5 text-neutral-500">
        No links yet. Add your first one above.
      </p>
    );

  return (
    <div className="divide-y divide-neutral-200">
      {links.data?.map((link) => (
        <article
          key={link.id}
          className="flex flex-col gap my-5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0">
            <a
              href={link.shortUrl || `/${link.slug}`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
            >
              /{link.slug}
            </a>
            <p className="truncate text-sm text-neutral-500">{link.url}</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <span>{link.clicks} clicks</span>
            <button
              type="button"
              onClick={() => copyLink(link)}
              className="font-semibold bg-neutral-800 hover:underline px-10 py-3 rounded-lg text-white text-md"
            >
              {copiedSlug === link.slug ? "Copied" : "Copy"}
            </button>
            <button
              type="button"
              disabled={remove.isPending}
              onClick={() => remove.mutate(link.id)}
              className="font-semibold bg-red-600 hover:underline px-10 py-3 rounded-lg text-white text-md"
            >
              {remove.isPending ? "Deleting..." : "Delete"}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
