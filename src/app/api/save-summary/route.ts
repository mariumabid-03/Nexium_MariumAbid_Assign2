// app/api/save-summary/route.ts
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();
  const { url, summary } = body;

  const { data, error } = await supabase
    .from("summaries")
    .insert([{ url, summary }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true, data }), { status: 200 });
}