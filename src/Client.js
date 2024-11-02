import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./style/Client.module.css";
import ShoppingCartButton from "./components/ShopingCartButton";
import shoppingCart from "./assets/shopping_cart.png";
import shoppingCart_2 from "./assets/Bikes/shoppingCart_2.png";
import { db } from "./firebase";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";

const Client = () => {
    const navigate = useNavigate();
    const goToSignUp = () => { navigate("/"); };
    const goToAccount = () => { navigate("/clientprofile"); }
    const goToOrder = () => { navigate("/clientorder"); }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "bike"));
                const productsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button className={styles.accountButton} onClick={goToAccount}>Account</button>
                <h1 className={styles.title} onClick={goToSignUp}>MotorBike Shop</h1>
                <ShoppingCartButton img={shoppingCart} isActive={true} link={"/clientorder"}/>
            </header>
            <div className={styles.gridCont}>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <div className={styles.productCard}>
                            <img src={product.img} alt={product.name} className={styles.productImage} />
                            <div className={styles.productCartFooter}>
                                <p className={styles.productName}>{product.name}</p>
                                <p className={styles.productPrice}>{product.price}</p>
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
