import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QuickSurf - Custom SurfBoards Same Day Delivery</title>
        <meta name="description" content="Same Day Delivery Custom Surf Boards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage
        <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}


