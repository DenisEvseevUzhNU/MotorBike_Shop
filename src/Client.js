import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./style/Client.module.css";
import ShoppingCartButton from "./components/ShopingCartButton";
import shoppingCart from "./assets/shopping_cart.png";
import shoppingCart_2 from "./assets/Bikes/shoppingCart_2.png";

import Bike_1 from "./assets/Bikes/Ducati-1299.png";
import Bike_2 from "./assets/Bikes/BMW-S1000RR.png";
import Bike_3 from "./assets/Bikes/Kawasaki-Z1000SX.png";
import Bike_4 from "./assets/Bikes/Honda-CBR1000RR.png";
import Bike_5 from "./assets/Bikes/Yamaha-R6.png";
import Bike_6 from "./assets/Bikes/GSX-R-1000.png";
import Bike_7 from "./assets/Bikes/GSX-S-1000.png";
import Bike_8 from "./assets/Bikes/BMW-S1000R.png";
import Bike_9 from "./assets/Bikes/Aprilia-Dorsoduro-900.png";

const products = [
    { name: "Ducati 1299", image: Bike_1 },
    { name: "BMW S1000RR", image: Bike_2 },
    { name: "Kawasaki Z1000SX", image: Bike_3 },
    { name: "Honda CBR1000RR", image: Bike_4 },
    { name: "Yamaha R6", image: Bike_5 },
    { name: "GSX-R 1000", image: Bike_6 },
    { name: "GSX-S 1000", image: Bike_7 },
    { name: "BMW S1000R", image: Bike_8 },
    { name: "Aprilia Dorsoduro 900", image: Bike_9 },
];

const Client = () => {

    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate("/");
    };

    const goToAccount = () => {
        navigate("/clientprofile");
    }

    const goToOrder = () => {
        navigate("/clientorder");
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button className={styles.accountButton} onClick={goToAccount}>Account</button>
                <h1 className={styles.title} onClick={goToSignUp}>MotorBike Shop</h1>
                <ShoppingCartButton img={shoppingCart} isActive={true} link={"/clientorder"}/>
            </header>
            <div className={styles.gridCont}>
                <div className={styles.grid}>
                    {products.map((product, index) => (
                        <div key={index} className={styles.productCard}>
                            <img src={product.image} alt={product.name} className={styles.productImage} />
                            <div className={styles.productCartFooter}>
                                <p className={styles.productName}>{product.name}</p>
                                <ShoppingCartButton img={shoppingCart_2} isActive={false}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Client;
