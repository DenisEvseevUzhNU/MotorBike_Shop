import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/LinkButton.module.css";

const LinkButton = ({ to, children, className = "link-button" }) => {
    return (
        <Link to={to}>
            <button className={styles[className]}>
                {children}
            </button>
        </Link>
    );
};

export default LinkButton;
