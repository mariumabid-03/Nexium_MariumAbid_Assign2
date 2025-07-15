import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullText } = body;

    if (!fullText) {
      return new Response(JSON.stringify({ error: "fullText is required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bloglens");
    const collection = db.collection("blogs");

    const result = await collection.insertOne({ fullText });

    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
  } catch (error) {
    console.error('MongoDB Error:', error);
    return new Response(JSON.stringify({ error: "Failed to save to MongoDB" }), { status: 500 });
  }
}
