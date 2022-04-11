import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/images/phone.svg"
            alt="Telephone Icon"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.order}>ORDER NOW!</div>
          <div className={styles.phone}>585 222 4455</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={(styles.listItem, styles.img)}>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width="150px"
              height="59px"
            />
          </li>
          <li className={styles.listItem}>Portfolio</li>
          <li className={styles.listItem}>contact</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/cart.svg" alt="cart" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
