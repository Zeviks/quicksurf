import styles from "../styles/Featured.module.css";
import Image from "next/image";
import Button from "./Button";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Featured = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.highlightTitle}>Hurray!</p>
          <h1
            className={styles.heroHeading}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Same Day Delivery Surf Boards!
          </h1>
          <p
            className={styles.heroDescription}
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Forget the long waits for a surfboard to arrive by mail. Order now
            and recieve it the same day!
          </p>
          <h2
            className={styles.startingPrice}
            data-aos="fade-left"
            data-aos-delay="600"
          >
            Now Starting From <span className={styles.heroPrice}>$299.99</span>
          </h2>
          <div className={styles.buttonSale} data-aos="zoom-in">
            <Button title="Order Now" />
            <p className={styles.heroSale}>50% OFF!</p>
          </div>
        </div>
        <div
          className={styles.imgContainer}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Image
            src="/images/featured-img.svg"
            alt="featured image"
            height="1000px"
            width="1000px"
          />
        </div>
      </div>
      {/* THIS NEEDS A FIX */}
      <div className={styles.scroll}>
        <p className={styles.scrollTitle}>Our Awesome Boards</p>
        <FontAwesomeIcon icon={faAngleDown} className={styles.scrollIcon} />
      </div>
    </div>
  );
};

export default Featured;
