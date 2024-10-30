import React from "react";
import styles from "./style/reg.module.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import ButtonShort from "./components/ButtonShort";

const Reg = () => {
    return (
        <div className={styles.regPage}>
            <div className={styles.regContainerWrapper}>
                <ButtonShort to="/" text = "Back"/>
                <div className={styles.regContainer}>
                    <div className={styles.inputRow}>
                        <InputField label="Login" type="text" placeholder="Login" />
                        <InputField label="Password" type="password" placeholder="Password" />
                    </div>
                    <div className={styles.inputRow}>
                        <InputField label="Phone Number" type="text" placeholder="Phone Number" />
                        <InputField label="Confirm Password" type="password" placeholder="Confirm Password" />
                    </div>
                    <Button>Register</Button>
                </div>
            </div>
        </div>
    );
};

export default Reg;
