import React from "react";
import Button from "./components/Button";
import LinkButton from "./components/LinkButton";
import InputField from "./components/InputField";
import styles from "./style/App.module.css"

const Login = function () {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginform}>
                <div>
                    <h1 className={styles.text}>Login</h1>
                </div>

                <InputField label="Login" type="text" placeholder="login" className={styles.Input} />
                <InputField label="Password" type="password" placeholder="password" className={styles.Input} />

                <div className={styles.buttonform2}>
                    <Button>
                        login
                    </Button>
                </div>

                <div>
                    <h1 className={styles.text2}>
                        or
                        </h1>
                </div>

                <div className={styles.buttonform}>
                    <Button to="/reg">
                        Create your account
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
