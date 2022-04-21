import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/BoardCard.module.css";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BoardCard = ({ title, desc, price, img, aosDir, aosDelay }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
          <Button className={styles.customizeBtn} title="Customize" />
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
