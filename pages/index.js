import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QuickSurf - Same Day Surf Board Delivery</title>
        <meta name="description" content="Same Day Delivery Custom Surf Boards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hompage
    </div>
  )
}
