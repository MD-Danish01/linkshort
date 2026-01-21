import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const { url } = await params;
  console.log(url);
  // // Fetch the long URL from the database based on the short URL
  const client = await clientPromise;
  const db = client.db("bitlinkproject");
  const collection = db.collection("urls");
  //check if shortCode already exists then redirect
  const doc = await collection.findOne({ shortCode: url });
  if (doc) {
    console.log("url found");
    redirect(doc.longUrl);
  } else {
    //if the url not found then user will see home page of this website
    console.log("url not found");
    redirect(process.env.NEXT_PUBLIC_BASE_URL);
  }
  return <div>{url}</div>;
}
