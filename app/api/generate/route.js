import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("LinkShortenerDB");
    const collection = db.collection("urls");
    const { longUrl, shortCode } = await request.json();
    //check if shortCode already exists
    const existing = await collection.findOne({ shortCode });
    if (existing) {
      return NextResponse.json(
        { message: "Short code already exists. Please choose another one." },
        { status: 400 }
      );
    }
    //insert new url
    await collection.insertOne({ longUrl, shortCode });

    return NextResponse.json(
      { message: "URL shortened successfully", longUrl, shortCode },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error shortening URL", error: error.message },
      { status: 500 }
    );
  }
}
