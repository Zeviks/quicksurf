import BoardCard from './BoardCard';
import styles from '../styles/BoardList.module.css';
import Image from 'next/image';

const BoardList = () => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Award Winning Surf Boards</h1>
      <p className={styles.desc}>Our surfboards have recieved some of the most coveted awards in the industry.
      We are proud to be the best in the game. Our surfboards are completly manufactured in the United States of America. We Guarantee Satisfaction.
      </p>
      <div className={styles.wrapper}>
          <BoardCard aosDir={"zoom-in-up"} aosDelay={"100"}/>
          <BoardCard aosDir={"zoom-in-up"} aosDelay={"150"}/>
          <BoardCard aosDir={"zoom-in-up"} aosDelay={"200"}/>
          <BoardCard aosDir={"zoom-in-up"} aosDelay={"250"}/>
          <BoardCard aosDir={"zoom-in-up"} aosDelay={"300"}/>
          <BoardCard aosDir={"zoom-in-up"} aosDelay={"350"}/>
          <BoardCard aosDir={"zoom-in-up"} aosDelay={"400"}/>
          <BoardCard aosDir={"zoom-in-up"} aosDelay={"450"}/>
      </div>
    </div>
  )
}

export default BoardList