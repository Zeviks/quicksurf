import styles from "../styles/cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th className={styles.th}>Products</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Extras</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.imgTD}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/board1.webp"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </td>
            <td className={styles.td}>
              <span className={styles.name}>WAYMAKER</span>
            </td>
            <td className={styles.td}>
              <span className={styles.extras}>
                Razor Edge Fins & Non-Slip Coating
              </span>
            </td>
            <td className={styles.td}>
              <span className={styles.price}>$1,000</span>
            </td>
            <td className={styles.td}>
              <span className={styles.quantity}>1</span>
            </td>
            <td className={styles.td}>
              <span className={styles.total}>$1,000</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.imgTD}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/board1.webp"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </td>
            <td className={styles.td}>
              <span className={styles.name}>WAYMAKER</span>
            </td>
            <td className={styles.td}>
              <span className={styles.extras}>
                Razor Edge Fins & Non-Slip Coating
              </span>
            </td>
            <td className={styles.td}>
              <span className={styles.price}>$1,000</span>
            </td>
            <td className={styles.td}>
              <span className={styles.quantity}>1</span>
            </td>
            <td className={styles.td}>
              <span className={styles.total}>$1,000</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.imgTD}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/board1.webp"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </td>
            <td className={styles.td}>
              <span className={styles.name}>WAYMAKER</span>
            </td>
            <td className={styles.td}>
              <span className={styles.extras}>
                Razor Edge Fins & Non-Slip Coating
              </span>
            </td>
            <td className={styles.td}>
              <span className={styles.price}>$1,000</span>
            </td>
            <td className={styles.td}>
              <span className={styles.quantity}>1</span>
            </td>
            <td className={styles.td}>
              <span className={styles.total}>$1,000</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.imgTD}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/board1.webp"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </td>
            <td className={styles.td}>
              <span className={styles.name}>WAYMAKER</span>
            </td>
            <td className={styles.td}>
              <span className={styles.extras}>
                Razor Edge Fins & Non-Slip Coating
              </span>
            </td>
            <td className={styles.td}>
              <span className={styles.price}>$1,000</span>
            </td>
            <td className={styles.td}>
              <span className={styles.quantity}>1</span>
            </td>
            <td className={styles.td}>
              <span className={styles.total}>$1,000</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.imgTD}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/board1.webp"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </td>
            <td className={styles.td}>
              <span className={styles.name}>WAYMAKER</span>
            </td>
            <td className={styles.td}>
              <span className={styles.extras}>
                Razor Edge Fins & Non-Slip Coating
              </span>
            </td>
            <td className={styles.td}>
              <span className={styles.price}>$1,000</span>
            </td>
            <td className={styles.td}>
              <span className={styles.quantity}>1</span>
            </td>
            <td className={styles.td}>
              <span className={styles.total}>$1,000</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.totalContainer}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
