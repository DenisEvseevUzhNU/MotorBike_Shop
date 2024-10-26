import React from "react";
import {Link} from "react-router-dom";

const Login=function(){

    return(
        <div className="loginPage">
            <div className="loginform">

                <div>
                    <h1 className="text">
                    Login
                    </h1>
                </div>
                

                  <div className="inputcont">
                  <h1 className="text3">
                        Login
                      </h1>
                    <input className="Input" type="text" placeholder="login">
                
                    </input>
                  </div>
                
                    <div className="inputcont">
                      <h1  className="text3">
                        Password
                      </h1>
                      <input className="Input"type="password" placeholder="password">

                
                      </input>
                  
                    </div>

                    <div className="buttonform2">
                      <button className="button">
                        login
                      </button>
                    </div>

                    <div>
                    <h1 className="text2">
                      or
                    </h1>
                    </div>

                    <div className="buttonform">
                      <Link to="/reg">
                        <button className="button">
                          create your account
                        </button>
                      </Link>
                    </div>
                
            </div>

        </div>
    );
}
export default Login;