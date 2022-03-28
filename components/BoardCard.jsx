import React from 'react'
import styles from '../styles/BoardCard.module.css'
import Image from 'next/image'

const BoardCard = () => {
  return (
    <div className={styles.container}>
        <Image src='/images/board1.png' alt='Picture of a surfboard' width="500px" height="500px"/>
        <h1 className={styles.title}>WAYMAKER</h1>
        <span className={styles.price}>$299.99</span>
        <p className={styles.desc}>
        A Simple honest discription about the item.
        </p>
    </div>
  )
}

export default BoardCard