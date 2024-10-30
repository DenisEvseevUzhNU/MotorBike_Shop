import React from "react";
import styles from "../style/ButtonShort.module.css"
import { useNavigate } from 'react-router-dom';

const ButtonShort = function (props){

    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate(props.to);
    };

    return (
        <button className={styles.button} onClick={goToSignUp}>
            {props.text}
        </button>
    );
}

export default ButtonShort;