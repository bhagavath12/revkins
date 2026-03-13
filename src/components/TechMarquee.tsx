"use client";

const techLogos = [
  { name: "n8n", path: "/icons/n8n.svg" },
  { name: "OpenAI", path: "/icons/openai.svg" },
  { name: "Claude", path: "/icons/claude.svg" },
  { name: "Gemini", path: "/icons/gemini.svg" },
  { name: "Supabase", path: "/icons/superbase.svg" },
  { name: "Vapi", path: "/icons/vapi.svg" },
  { name: "Airtable", path: "/icons/airtable.svg" },
  { name: "ClickUp", path: "/icons/clickup.svg" },
  { name: "Zoho", path: "/icons/zoho.svg" },
  { name: "Slack", path: "/icons/slack.svg" },
  { name: "Gmail", path: "/icons/gmail.svg" },
  { name: "Google", path: "/icons/google.svg" },
  { name: "Facebook", path: "/icons/facebook.svg" },
  { name: "YouTube", path: "/icons/youtube.svg" },
  { name: "LinkedIn", path: "/icons/linkedin.svg" },
  { name: "Sora", path: "/icons/sora.svg" },
];

export default function TechMarquee() {
  return (
    <div className="w-full bg-white py-12 border-y border-slate-100 overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center mx-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
          >
            <img
              src={logo.path}
              alt={logo.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}