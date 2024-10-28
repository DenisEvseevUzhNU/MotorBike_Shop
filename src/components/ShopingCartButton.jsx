import React from "react";
import styles from "../style/ShoppingCartButton.module.css";

const ShoppingCartButton = function (props){
    return (
        <button className={props.isActive ? styles.button : styles.button_2}>
            <img src={props.img} alt="Close" width="20" height="20"/>
        </button>
    );
}

export default ShoppingCartButton;