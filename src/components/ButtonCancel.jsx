import React from "react";
import styles from "../style/ButtonCancel.module.css";

const ButtonCancel = function (){
    return (
        <button className={styles.cancel}>
            Cancel ❌
        </button>
    );
}

export default ButtonCancel;