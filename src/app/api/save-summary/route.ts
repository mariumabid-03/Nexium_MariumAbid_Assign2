import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url, summary } = body;

    if (!url || !summary) {
      return new Response(JSON.stringify({ error: "url and summary are required" }), { status: 400 });
    }

    const { data, error } = await supabase
      .from("summaries")
      .insert([{ url, summary }]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.error('Supabase Error:', error);
    return new Response(JSON.stringify({ error: "Failed to save to Supabase" }), { status: 500 });
  }
}
