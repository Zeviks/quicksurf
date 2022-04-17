import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
  const board = {
    id: 1,
    img: "/images/board1.webp",
    name: "WAYMAKER",
    price: [299.99, 349.99, 399.99],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis tincidunt morbi in erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Facilisis tincidunt morbi in erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nFacilisis tincidunt morbi in erat.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={board.img}
            alt={board.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{board.name}</h1>
        <span className={styles.price}>${board.price[size]}</span>
        <p className={styles.desc}>{board.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/images/surficon.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/images/surficon.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/images/surficon.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose Additional Parts</h3>
        <div className={styles.parts}>
          <div className={styles.part}>
            <input
              type="checkbox"
              id="razor"
              name="razor"
              className={styles.checkbox}
            />
            <label htmlFor="razor">Razor Edge Fins</label>
            <input
              type="checkbox"
              id="coating"
              name="coating"
              className={styles.checkbox}
            />
            <label htmlFor="coating">Anti-Slip Coating</label>
            <input
              type="checkbox"
              id="bag"
              name="bag"
              className={styles.checkbox}
            />
            <label htmlFor="bag">Travel Bag</label>
            <input
              type="checkbox"
              id="strap"
              name="strap"
              className={styles.checkbox}
            />
            <label htmlFor="strap">Ankle Strap</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
