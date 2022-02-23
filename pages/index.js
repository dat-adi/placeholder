import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Placeholder</title>
        <meta name="description" content="A simple placeholder website for stuff that isn't quite ready yet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is a <a href="#">Placeholder!</a>
        </h1>

        <p className={styles.description}>
          If you are seeing this, that means that this website is not ready yet. <br/>
          Come back later, once we have everything set up!
        </p>

      </main>

      <footer className={styles.footer}>
          Placeholder by dat-adi 
      </footer>
    </div>
  )
}
