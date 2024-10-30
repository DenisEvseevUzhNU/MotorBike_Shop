import React from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";
import LinkButton from "./components/LinkButton";
import ButtonAccept from "./components/ButtonAccept";
import ButtonCancel from "./components/ButtonCancel";
import ButtonBack from "./components/ButtonBack";
import styles from "./style/Admin.module.css"; // Import styles as a module

const Admin = function () {
    const orders = [
        { id: 1, user: "User1", phone: "123-456-7890", comment: "Please deliver fast", imgSrc: "bike1.jpg" },
        { id: 2, user: "User2", phone: "987-654-3210", comment: "I need this by weekend", imgSrc: "bike2.jpg" }
    ];

    return (
        <div className={styles.adminContainer}>
            <div className={styles.header}>
                <h1>MotorBike Shop Admin</h1>
                <ButtonBack to="/" text="Back"/>
            </div>
            <div className={styles.ordersGrid}>
                {orders.map((order) => (
                    <div key={order.id} className={styles.orderCard}>
                        <img src={order.imgSrc} alt="Motorbike" className={styles.bikeImage} />
                        <div className={styles.orderInfo}>
                            <p><strong>User:</strong> {order.user}</p>
                            <p><strong>Phone number:</strong> {order.phone}</p>
                        </div>
                        <div className={styles.orderComment}>
                            <h1 className={styles.text}>
                                {order.comment}
                            </h1>
                        </div>
                        <div className={styles.orderActions}>
                            <div className={styles.acceptContainer}>
                                <ButtonAccept/>
                            </div>
                            <div className={styles.cancelContainer}>
                                <ButtonCancel/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
