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
        <ul>
          <li>  
          <Link href="/image-in-picture/">
            <a>Image in picture POC</a>
          </Link>
          </li>
          <li>
            <Link href="/app-lock/">
              <a>App lock</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
