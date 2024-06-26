import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div>
          <p>Hello Fans of ...</p>
          <Link href="/volumes">Go to all Volumes 🪄</Link>
        </div>
      </main>
    </>
  );
}
