import Head from "next/head";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicApp = dynamic(() => import("./src/"), {
  loading: () => <p>is it loading......</p>,
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>App lock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>App lock</h1>
      <DynamicApp />
    </div>
  );
}
