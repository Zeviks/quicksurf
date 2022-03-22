import styles from "../styles/Navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <FontAwesomeIcon icon={faCoffee} />
        </div>      
      </div>

      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  )
}

export default Navbar