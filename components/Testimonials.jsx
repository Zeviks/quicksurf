import styles from "../styles/Testimonials.module.css";
import Image from "next/image";
import "aos/dist/aos.css";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.heading}>
          <h2 className={styles.title} data-aos="fade-right">
            Client&rsquo;s Kind Words
          </h2>
          <p className={styles.headingQuote}>
            We Help ambitious business like yours generate more profits by
            building awerness, and delivering quality products.
          </p>
        </div>
        <div className={styles.topLine}>
          <Image src="/images/top-line.svg" alt="" width={1000} height={5} />
        </div>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialContent}>
            <p className={styles.testimonialText} data-aos="zoom-in">
              “I’ve Been Working With QuickSurf Since 2014 And it Has Great! He
              Works Fast And Consistently Delivers High-Quality Work. They Takes
              My Vision And Translates It Into A Prefessional Design That
              Functions For My Business Goals. I’ve Really Aprreciated How He’s
              Always Focused On The Function Of The Piece As Well As The Visual
              Design.”
            </p>

            <div className={styles.testimonialName}>
              <h3 className={styles.name}>Mustafa Rahaman</h3>
              <p className={styles.job} data-aos="fade-left">
                CEO,
                <span
                  className={styles.company}
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  SurfIT
                </span>
              </p>
              <div className={styles.topLine}>
                <Image
                  src="/images/top-line.svg"
                  alt="line"
                  width={1000}
                  height={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.personImg}>
        <Image
          src="/images/testimonial-p.png"
          alt="line"
          width="1000px"
          height="1000px"
        />
      </div>
    </div>
  );
};

export default Testimonials;
