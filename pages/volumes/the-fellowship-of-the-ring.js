import Link from "next/link";
import { volumes } from "@/resources-1/lib/data";
import Image from "next/image";
import Head from "next/head";

export default function VolumeOneDetailPage() {
  const currentVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  if (!currentVolume) {
    return <p>Volume not found</p>;
  }

  return (
    <>
      <Head>
        <title>{currentVolume.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Link href="/volumes">↩️ All Volumes</Link>
        <h1>{currentVolume.title}</h1>
        <p>{currentVolume.description}</p>
        <h2>Books in this Volume</h2>
        <ul>
          {currentVolume.books.map((book) => (
            <li key={book.ordinal}>
              Ordinal number: {book.ordinal} <br />
              Title: {book.title}
            </li>
          ))}
        </ul>
        <Image
          src="/images/the-fellowship-of-the-ring.png"
          height={300}
          width={200}
          alt="The volume cover of the fellowship of the ring"
        />
      </main>
    </>
  );
}
