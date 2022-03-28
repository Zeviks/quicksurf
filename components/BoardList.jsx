import BoardCard from './BoardCard';
import styles from '../styles/BoardList.module.css';
import Image from 'next/image';


const BoardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Award Winning Boards</h1>
      <p className={styles.desc}>Our surfboards have recieved some of the most coveted awards in the industry.
      We are proud to be the best in the game. Our surfboards are made completly in the USA. We manufactured everything in
      house in order to produce the quality of product we are globaly known for. 
      Our products are our identity, and our customers are our family. 
      </p>
      <div className={styles.wrapper}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
      </div>
    </div>
  )
}

export default BoardList