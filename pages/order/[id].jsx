import React from "react";
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const statusClass = (index) => {
    const status = 0;
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <span className={styles.id}>12334425345643</span>
              </td>
              <td className={styles.td}>
                <span className={styles.name}>John Doe</span>
              </td>
              <td className={styles.td}>
                <span className={styles.address}>777 USA Way, Earth</span>
              </td>
              <td className={styles.td}>
                <span className={styles.total}>$67.90</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          {/* Status 1 */}
          <div className={statusClass(0)}>
            <Image src="/images/paid.png" alt="" width={50} height={50} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkIcon}
                src="/images/check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          {/* Status 2 */}
          <div className={statusClass(1)}>
            <Image src="/images/prep.png" alt="" width={50} height={50} />
            <span>Prepering</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkIcon}
                src="/images/check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          {/* Status 3 */}
          <div className={statusClass(2)}>
            <Image src="/images/shipped.png" alt="" width={50} height={50} />
            <span>On The Way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkIcon}
                src="/images/check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          {/* Status 4 */}
          <div className={statusClass(3)}>
            <Image src="/images/delivered.png" alt="" width={50} height={50} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkIcon}
                src="/images/check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
