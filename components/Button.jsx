import styles from '../styles/Button.module.css'

const Button = ({title}) => {
  return (
    <button type="button" className={styles.buyBtn}>{title}</button>
  )
}

export default Button