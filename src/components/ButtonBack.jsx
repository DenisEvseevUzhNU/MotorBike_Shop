import React from "react";
import styles from "../style/ButtonBack.module.css";
import { useNavigate } from 'react-router-dom';

const ButtonBack = function (props){
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate(props.to);
    };

    return (
        <button className={styles.backButton} onClick={goToSignUp}>
            {props.text}
        </button>
    );
}

export default ButtonBack;