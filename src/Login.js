import React, {useState} from "react";
import Button from "./components/Button";
import LinkButton from "./components/LinkButton";
import InputField from "./components/InputField";
import styles from "./style/App.module.css";
import { loginUser } from './AuthDataBase';
import RegButton from "./components/RegButton";
import { useNavigate } from 'react-router-dom';

const Login = function () {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        let result = await loginUser(email, password);
        if (result){
            navigate('/Client')
        }
        else{
            alert("Введіть Дані !");
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginform}>
                <div>
                    <h1 className={styles.text}>Login</h1>
                </div>

                <InputField label="Email" type="text" placeholder="email" className={styles.Input} value={email} setState={setEmail}/>
                <InputField label="Password" type="password" placeholder="password" className={styles.Input} value={password} setState={setPassword}/>

                <div className={styles.buttonform2}>
                    <RegButton functions={handleLogin}>
                        login
                    </RegButton>
                </div>

                <div>
                    <h1 className={styles.text2}>
                        or
                        </h1>
                </div>

                <div className={styles.buttonform}>
                    <Button to="/reg" isNavigation={true}>
                        Create your account
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
