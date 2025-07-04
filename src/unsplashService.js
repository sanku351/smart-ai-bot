import { prevUser } from "./context/UserContext";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function query() {
  const prompt = encodeURIComponent(prevUser.prompt || "nature");
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${prompt}&orientation=squarish`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Unsplash API error: ${res.status} ${err}`);
  }

  const data = await res.json();

  // Unsplash gives you a URL directly, so no blob dance needed
  return data.urls.regular;
}
