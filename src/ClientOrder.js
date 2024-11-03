import React, {useState, useEffect} from "react";
import styles from "./style/ClientOrder.module.css";
import ButtonBack from "./components/ButtonBack";
import { db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "./AuthDataBase";


const ClientOrder = function () {

    const [cartItems, setCartItems] = useState([]);
    const { user } = useAuth();
    const [count, setCount] = useState(1);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value >= 0 && value <= 999) {
            setCount(value);
        }
    };

    useEffect(() => {
        const fetchCartItems = async () => {
          if (!user) return;
    
          try {
            const cartRef = doc(db, "carts", user.uid);
            const cartSnapshot = await getDoc(cartRef);
    
            if (cartSnapshot.exists()) {
              setCartItems(cartSnapshot.data().items);
            } else {
              console.log("Корзина пуста");
              setCartItems([]);
            }
          } catch (error) {
            console.error("Помилка при завантаженні корзини:", error);
          }
        };
    
        fetchCartItems();
    }, [user]);

    const removeFromCart = async (idToRemove) => {
        if (!user) return;
    
        try {
          const updatedCartItems = cartItems.filter((item) => item.id !== idToRemove);
          setCartItems(updatedCartItems);
    
          const cartRef = doc(db, "carts", user.uid);
          await updateDoc(cartRef, { items: updatedCartItems });
          
          alert("Замовлення відхилено!")
        } catch (error) {
          console.error("Помилка при видаленні товару з корзини:", error);
        }
    };

    const BuyCart = async (idToRemove) => {
        if (!user) return;
    
        try {
          const updatedCartItems = cartItems.filter((item) => item.id !== idToRemove);
          setCartItems(updatedCartItems);
    
          const cartRef = doc(db, "carts", user.uid);
          await updateDoc(cartRef, { items: updatedCartItems });
          
          alert("Замовлення прийнято!");
        } catch (error) {
          console.error("Помилка при видаленні товару з корзини:", error);
        }
    };

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
                    {cartItems.map((bike) => (
                        <div className={styles.bikeContainer}>
                            <div className={styles.bikeContent}>
                                <img src={bike.img} alt={bike.name} className={styles.imagePlaceholder} />
                                <div className={styles.details}>
                                    <p>Name: <span>{bike.name}</span></p>
                                    <p>Power: <span>{bike.power}</span></p>
                                    <p>Torque: <span>{bike.torque}</span></p>
                                    <p>Weight: <span>{bike.weight}</span></p>
                                    <p>Price: <span>{bike.price}</span></p>
                                    <input type="number" value={count} min="1" max="999 "onChange={handleChange} className={styles.countInput} />
                                </div>
                            </div>
                            <textarea placeholder="Comment" className={styles.commentInput}></textarea>
                            <div className={styles.buttonContainer}>
                                <button className={styles.buyButton} onClick={() => BuyCart(bike.id)}>Buy</button>
                                <button className={styles.cancelButton} onClick={() => removeFromCart(bike.id)}>Cancel</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ClientOrder;
