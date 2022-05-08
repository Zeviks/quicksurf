import BoardCard from "./BoardCard";
import styles from "../styles/3.BoardList.module.css";

const BoardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Award Winning Surf Boards</h1>
      <p className={styles.desc}>
        Our surfboards have recieved some of the most coveted awards in the
        industry. We are proud to be the best in the game. Our surfboards are
        completly manufactured in the United States of America. We Guarantee
        Satisfaction.
      </p>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <BoardCard
            className={styles.card1}
            aosDir={"zoom-in-up"}
            aosDelay={"100"}
          />
          <BoardCard
            className={styles.card2}
            aosDir={"zoom-in-up"}
            aosDelay={"150"}
          />
          <BoardCard
            className={styles.card3}
            aosDir={"zoom-in-up"}
            aosDelay={"200"}
          />
          <BoardCard
            className={styles.card4}
            aosDir={"zoom-in-up"}
            aosDelay={"250"}
          />
          <BoardCard
            className={styles.card5}
            aosDir={"zoom-in-up"}
            aosDelay={"300"}
          />
          <BoardCard
            className={styles.card6}
            aosDir={"zoom-in-up"}
            aosDelay={"350"}
          />
          <BoardCard
            className={styles.card7}
            aosDir={"zoom-in-up"}
            aosDelay={"400"}
          />
          <BoardCard
            className={styles.card8}
            aosDir={"zoom-in-up"}
            aosDelay={"500"}
          />
          <BoardCard
            className={styles.card9}
            aosDir={"zoom-in-up"}
            aosDelay={"550"}
          />
          <BoardCard
            className={styles.card10}
            aosDir={"zoom-in-up"}
            aosDelay={"600"}
          />
          <BoardCard
            className={styles.card11}
            aosDir={"zoom-in-up"}
            aosDelay={"650"}
          />
          <BoardCard
            className={styles.card12}
            aosDir={"zoom-in-up"}
            aosDelay={"700"}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardList;
