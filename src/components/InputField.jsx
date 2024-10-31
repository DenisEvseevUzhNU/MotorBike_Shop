import React from "react";
import styles from "../style/InputField.module.css";

const InputField = ({ label, type, placeholder, value, setState }) => {
    return (
        <div className={styles.inputcont}>
            <label className={styles.text3}>{label}</label>
            <input className={styles.Input} type={type} placeholder={placeholder} value={value} onChange={(e) => setState(e.target.value)}/>
        </div>
    );
};

export default InputField;
