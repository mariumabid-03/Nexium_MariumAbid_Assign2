// app/api/save-fulltext/route.ts
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const body = await req.json();
  const { fullText } = body;

  try {
    const client = await clientPromise;
    const db = client.db("bloglens"); // use your DB name here
    const collection = db.collection("blogs");

    const result = await collection.insertOne({ fullText });

    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to save to MongoDB" }), { status: 500 });
  }
}