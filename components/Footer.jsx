import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.branding}>
          <Image
            src="/images/footerbrand.svg"
            alt="footer brand logo"
            width={220}
            height={75}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Facilisis tincidunt morbi in erat elit fringilla feugiat vulputate
            sed.
            <br />
            Tortor ornare hendrerit facilisi proin lorem vitae interdum.
          </p>
        </div>
        <div className={styles.footerList}>
          <div className={styles.aboutContainer}>
            <h2>ABOUT</h2>
            <a className={styles.link} href="#">
              Our Story
            </a>
            <a className={styles.link} href="#">
              Shipping Policy
            </a>
            <a className={styles.link} href="#">
              Return Policy
            </a>
          </div>
          <div className={styles.infoContainer}>
            <h2>INFORMATION</h2>
            <a className={styles.link} href="#">
              Our Boards
            </a>
            <a className={styles.link} href="#">
              Our Designers
            </a>
            <a className={styles.link} href="#">
              Careers
            </a>
          </div>
          <div className={styles.touchContainer}>
            <h2>GET IN TOUCH</h2>
            <a className={styles.link} href="#">
              natepacheco716@gmail.com
            </a>
            <p className={styles.address}>
              777 USA Way,
              <br />
              Earth, Milkyway Galaxy
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &#169;2022 Eternity | Terms | Privacy Policy
        </p>
        <p className={styles.personal}>
          Built and Designed By{" "}
          <a href="https://www.natepacheco.dev/">
            <span className={styles.personalLink}>Natanael</span>✨
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
