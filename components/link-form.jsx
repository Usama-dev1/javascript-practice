export default function LinkForm({ url, setUrl, create }) {
  function submit(event) {
    event.preventDefault();
    if (url.trim()) {
      create.mutate(url, { onSuccess: () => setUrl("") });
    }
  }

  return (
    <>
      <form
        onSubmit={submit}
        className="mt-10 flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-xl sm:flex-row"
      >
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a long URL"
          className="min-w-0 flex-1 rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none placeholder:text-neutral-600 focus:border-white"
          type="url"
          required
        />
        <button
          disabled={create.isPending}
          className="rounded-xl bg-white px-6 py-3 font-bold text-neutral-950 hover:bg-neutral-200 disabled:cursor-wait disabled:opacity-60"
        >
          {create.isPending ? "Creating..." : "Shorten link"}
        </button>
      </form>
      {create.isError && (
        <p className="mt-3 text-sm font-medium text-red-600">
          {create.error.message}
        </p>
      )}
    </>
  );
}
