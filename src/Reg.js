import React, {useState} from "react";
import styles from "./style/reg.module.css";
import RegButton from "./components/RegButton";
import InputField from "./components/InputField";
import ButtonShort from "./components/ButtonShort";
import {registerUser} from "./RegFireBase.js";
import { useNavigate } from 'react-router-dom';

const Reg = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
  
  
    const handleRegister = async () => {
      let result = await registerUser(email, phone_number, password, confirm_password);
      if (result){
        navigate('/login');
        alert ("Акаунт зареєстровано!");
      }
      else {
        alert ("Помилка реєстрації!");
      }
    };

    return (
        <div className={styles.regPage}>
            <div className={styles.regContainerWrapper}>
                <ButtonShort to="/" text = "Back"/>
                <div className={styles.regContainer}>
                    <div className={styles.inputRow}>
                        <InputField label="Email" type="text" placeholder="Email" value={email} setState={setEmail}/>
                        <InputField label="Password" type="password" placeholder="Password" value={password} setState={setPassword} />
                    </div>
                    <div className={styles.inputRow}>
                        <InputField label="Phone Number" type="text" placeholder="Phone Number" value={phone_number} setState={setPhoneNumber}/>
                        <InputField label="Confirm Password" type="password" placeholder="Confirm Password" value={confirm_password} setState ={setConfirmPassword} />
                    </div>
                    <RegButton functions= {handleRegister}>Register</RegButton>
                </div>
            </div>
        </div>
    );
};

export default Reg;
