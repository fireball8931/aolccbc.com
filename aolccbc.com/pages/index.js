import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import Link from 'next/link';
import Navbar from './_navbar.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Academy of Learning Career College - Langley and Abbotsford</title>
        <meta name="description" content="Academy of Learning Career College - Langley and Abbotsford campuses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navbar />
      <main className={styles.main}>


        <h1 className={styles.title}>
          Welcome to Academy of Learning
        </h1>

       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
