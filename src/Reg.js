import React, {useState} from "react";
import styles from "./style/reg.module.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import ButtonShort from "./components/ButtonShort";
import {registerUser} from "./RegFireBase.js";

const Reg = () => {

    const [login, setLogin] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
  
  
    const handleRegister = () => {
      registerUser(login, phone_number, password, confirm_password);
    };

    return (
        <div className={styles.regPage}>
            <div className={styles.regContainerWrapper}>
                <ButtonShort to="/" text = "Back"/>
                <div className={styles.regContainer}>
                    <div className={styles.inputRow}>
                        <InputField label="Login" type="text" placeholder="Login" value={login} setState={setLogin}/>
                        <InputField label="Password" type="password" placeholder="Password" value={password} setState={setPassword} />
                    </div>
                    <div className={styles.inputRow}>
                        <InputField label="Phone Number" type="text" placeholder="Phone Number" value={phone_number} setState={setPhoneNumber}/>
                        <InputField label="Confirm Password" type="password" placeholder="Confirm Password" value={confirm_password} setState ={setConfirmPassword} />
                    </div>
                    <Button functions= {handleRegister} isNavigation={false}>Register</Button>
                </div>
            </div>
        </div>
    );
};

export default Reg;
