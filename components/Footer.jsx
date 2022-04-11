import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.title}>FIND OUR STORES</h2>

          <h3 className={styles.city}>TEXAS</h3>
          <p className={styles.text}>
            1654 R.Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>

          <h3 className={styles.city}>NEW YORK</h3>
          <p className={styles.text}>
            1654 R.Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>

          <h3 className={styles.city}>FLORIDA</h3>
          <p className={styles.text}>
            1654 R.Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>

          <h3 className={styles.city}>TOKYO</h3>
          <p className={styles.text}>
            1654 R.Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>WORKING HOURS</h2>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 12:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.links}>Follow Us</h2>
          <FontAwesomeIcon className={styles.scrollIcon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
