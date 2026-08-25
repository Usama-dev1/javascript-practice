import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//fetch data get api call promise
async function getLinks() {
  const response = await fetch("/api/links");
  if (!response.ok) throw new Error("Could not load links");
  return response.json();
}
//fetch data post api call return promise

async function postLink(url) {
  const response = await fetch("/api/links", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error);
  return result;
}

async function removeLink(id) {
  const response = await fetch(`/api/links/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Could not delete link");
}

export default function useLinks() {
  const queryClient = useQueryClient();
  const links = useQuery({
    queryKey: ["links"],
    queryFn: getLinks,
    staleTime: 60_000,
    gcTime: 300_000,
  });
  const create = useMutation({
    mutationFn: postLink,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["links"] }),
  });
  const remove = useMutation({
    mutationFn: removeLink,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["links"] }),
  });

  return { links, create, remove };
}
