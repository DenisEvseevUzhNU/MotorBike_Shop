import React from "react";
import "./style/reg.css";

const Reg = () => {
    return (
        <div className="regPage">
            <div className="regContainerWrapper">
                <button className="backButton">Back</button>
                <div className="regContainer">
                    <div className="inputRow">
                        <div className="inputContainer">
                            <label className="inputLabel">Login</label>
                            <input type="text" placeholder="Login" className="inputField" />
                        </div>
                        <div className="inputContainer">
                            <label className="inputLabel">Password</label>
                            <input type="password" placeholder="Password" className="inputField" />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputContainer">
                            <label className="inputLabel">Phone Number</label>
                            <input type="text" placeholder="Phone Number" className="inputField" />
                        </div>
                        <div className="inputContainer">
                            <label className="inputLabel">Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" className="inputField" />
                        </div>
                    </div>
                    <button className="registerButton">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Reg;
