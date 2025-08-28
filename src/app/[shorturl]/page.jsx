import { notFound, redirect } from "next/navigation"
import clientPromise from "@/../lib/mongodb"

const page = async ({ params }) => {
  const shorturl = (await params).shorturl;
  const client = await clientPromise;
  const db = client.db("shortly");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: shorturl });
  if (!doc) return notFound();

  await collection.updateOne(
    { shorturl: params.shorturl },
    { $inc: { requests: 1 } }
  );

  redirect(doc.url);

  return (
    <div>
      <h1>Welcome to URL shortner</h1>
    </div>
  )
}

export default page;
