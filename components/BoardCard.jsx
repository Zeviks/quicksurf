import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/4.BoardCard.module.css";
import Link from "next/link";
import "aos/dist/aos.css";

const BoardCard = ({ title, desc, price, img, aosDir, aosDelay }) => {
  return (
    <div
      className={styles.container}
      data-aos={aosDir}
      data-aos-delay={aosDelay}
    >
      <div className={styles.img}></div>
      <div className={styles.cardContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <span className={styles.priceMark}>Starting At ${price}</span>
        <div className={styles.checkoutSec}>
          <Link href="/product/222333444999">Customize</Link>
        </div>
      </div>
    </div>
  );
};

BoardCard.defaultProps = {
  title: "Windbreaker",
  desc: "Same as the last but better. New Lightweight body, New Razor Sharp Fins, At the Same Low Prize.",
  price: "299.99",
};

export default BoardCard;
