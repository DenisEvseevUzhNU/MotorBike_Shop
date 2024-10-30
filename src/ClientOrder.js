import React from "react";
import styles from "./style/ClientOrder.module.css";
import ButtonBack from "./components/ButtonBack";

import Bike_1 from "./assets/Bikes/Ducati-1299.png";
import Bike_2 from "./assets/Bikes/BMW-S1000RR.png";
import Bike_3 from "./assets/Bikes/Kawasaki-Z1000SX.png";

const motorcycles = [
    {
        name: "Ducati 1299",
        power: "205 hp",
        torque: "144 Nm",
        weight: "168 kg",
        image: Bike_1,
    },
    {
        name: "BMW S 1000 RR",
        power: "207 hp",
        torque: "113 Nm",
        weight: "197 kg",
        image: Bike_2,
    },
    {
        name: "Kawasaki Z1000SX",
        power: "142 hp",
        torque: "111 Nm",
        weight: "238 kg",
        image: Bike_3,
    },
];

const ClientOrder = function () {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Order</h1>
                </div>
                <ButtonBack text="Back" to="/client"/>
            </div>
            <div className={styles.content}>
                <div className={styles.grid}>
                    {motorcycles.map((bike, index) => (
                        <div key={index} className={styles.bikeContainer}>
                            <div className={styles.bikeContent}>
                                <img src={bike.image} alt={bike.name} className={styles.imagePlaceholder} />
                                <div className={styles.details}>
                                    <p>Name: <span>{bike.name}</span></p>
                                    <p>Power: <span>{bike.power}</span></p>
                                    <p>Torque: <span>{bike.torque}</span></p>
                                    <p>Weight: <span>{bike.weight}</span></p>
                                    <input type="number" placeholder="Count" className={styles.countInput} />
                                </div>
                            </div>
                            <textarea placeholder="Comment" className={styles.commentInput}></textarea>
                            <div className={styles.buttonContainer}>
                                <button className={styles.buyButton}>Buy</button>
                                <button className={styles.cancelButton}>Cancel</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ClientOrder;
