import React from "react";
import styles from "../style/Button.module.css";
import { useNavigate } from 'react-router-dom';

const Button = ({children, to, isNavigation, functions}) => {

    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate(to);
    };

    return (
        <button onClick={isNavigation ? goToSignUp : functions} className={styles.button} >
            {children}
        </button>
    );
};

export default Button;
