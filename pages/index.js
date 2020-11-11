import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ImageInPicture from '../src/components/imageInPicture/'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Image in Picture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Image in Picture</h1>

      images:
      <p>
        <ImageInPicture />
      </p>
    </div>
  )
}
