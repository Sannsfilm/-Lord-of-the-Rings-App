import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";
import Head from "next/head";

export default function VolumeOneDetailPage() {
  const currentVolume = volumes.find(({ slug }) => slug === "the-two-towers");

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
          src="/images/the-two-towers.png" // was ist hier das fehler???
          height={300}
          width={200}
          alt="The volume cover of the-two-towers"
        />
      </main>
    </>
  );
}
