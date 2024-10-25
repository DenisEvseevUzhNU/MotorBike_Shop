import './style/App.css';

function App() {
  return (
    <div className="App">

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
                      <button className="button">
                        create your account
                      </button>
                    </div>
                
            </div>

        </div>
      
    </div>
  );
}

export default App;
