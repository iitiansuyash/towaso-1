import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>ToWaSo-Save Your Surroundings</title>
        <meta
          name="description"
          content="Save your surroundings with ToWaSo"
          />
          <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br/> the Home Page of ToWaSo
        </h1>

        <p className={styles.description}>
          <Link href="/blog">Go to Blog</Link>
        </p>
      </main>

    </div>
    </>
  )
}
