import React, {useState} from "react";
import Button from "./components/Button";
import LinkButton from "./components/LinkButton";
import InputField from "./components/InputField";
import styles from "./style/App.module.css";
import { loginUser } from './AuthDataBase';

const Login = function () {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        loginUser(login, password);
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginform}>
                <div>
                    <h1 className={styles.text}>Login</h1>
                </div>

                <InputField label="Login" type="text" placeholder="login" className={styles.Input} value={login} setState={setLogin}/>
                <InputField label="Password" type="password" placeholder="password" className={styles.Input} value={password} setState={setPassword}/>

                <div className={styles.buttonform2}>
                    <Button functions={handleLogin} isNavigation={false}>
                        login
                    </Button>
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
