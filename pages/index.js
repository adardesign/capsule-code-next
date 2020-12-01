import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Image in Picture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Link href="/image-in-picture/">
          <a>Image in picture POC</a>
        </Link>
      </nav>
    </div>
  );
}
