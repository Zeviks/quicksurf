import styles from '../styles/Featured.module.css'
import Image from "next/image"
import Button from "./Button"


const Featured = () => {
  return (
  
    <div className={styles.container}>
        <div className={styles.wrappper}>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                <p className={styles.highlightTitle}>Hurray!</p>
                  <h1 className={styles.heroHeading}>Same Day Delivery Surf Boards!</h1>
                  <p className={styles.heroDescription}>Forget the long waits for a surfboard to arrive by mail. Order now and recieve it the same day!</p>
                  <h2 className={styles.startingPrice}>Starting From <span className={styles.heroPrice}>$299.99</span></h2> 
                  <div className={styles.buttonSale}>
                    <Button title="Order Now" />
                    <p className={styles.heroSale}>50% OFF!</p> 
                  </div>  
                </div>

                <div className={styles.imgContainer}>
                  <Image src="/images/featured-img.svg" height="1000px" width="1000px"/>
                </div>
          </div> 
        </div>
    </div>
  )
}

export default Featured;