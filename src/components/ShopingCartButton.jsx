import React from "react";
import styles from "../style/ShoppingCartButton.module.css";
import { useNavigate } from 'react-router-dom';

const ShoppingCartButton = function (props){

    const navigate = useNavigate();

    const goToOrder = () => {
        navigate(props.link);
    }

    const handleButton = () => {
        goToOrder();
        props.onAddToCart();
    }

    return (
        <button className={props.isActive ? styles.button : styles.button_2} onClick={handleButton}>
            <img src={props.img} alt="Close" width="20" height="20"/>
        </button>
    );
}

export default ShoppingCartButton;