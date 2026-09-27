import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/gen-music")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["ELEVENLABS_API_KEY"];
        if (!apiKey) return new Response("no key", { status: 500 });
        const { prompt, duration } = (await request.json()) as {
          prompt: string;
          duration: number;
        };
        const res = await fetch("https://api.elevenlabs.io/v1/music", {
          method: "POST",
          headers: {
            "xi-api-key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt, duration_seconds: duration }),
        });
        if (!res.ok) {
          const err = await res.text();
          return new Response(`ERR ${res.status}: ${err}`, { status: 502 });
        }
        const buf = await res.arrayBuffer();
        return new Response(buf, {
          headers: { "Content-Type": "audio/mpeg" },
        });
      },
    },
  },
});
