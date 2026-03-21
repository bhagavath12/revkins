import { NextResponse } from 'next/server';

const WEBHOOK_URL = "https://n8n.srv1432486.hstgr.cloud/webhook/07e2579f-e401-4950-a43d-8e52db138edb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Proxy the request server-side to bypass browser CORS blocking
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      console.error(`n8n responded with status: ${response.status}`);
      return NextResponse.json({ error: `n8n returned status ${response.status}` }, { status: response.status });
    }

    const textData = await response.text();
    try {
      const data = JSON.parse(textData);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json({ message: textData }); // Handle plain text fallback
    }

  } catch (error) {
    console.error("Next.js API proxy error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
