import React from "react";
import styles from "../style/RegButton.module.css";
import { useNavigate } from 'react-router-dom';

const RegButton = ({children, functions, to}) => {

    const navigate = useNavigate();

    const handleRegister = () => {
        functions()
        navigate(to);
    }

    return (
        <button onClick={handleRegister} className={styles.button} >
            {children}
        </button>
    );
};

export default RegButton;