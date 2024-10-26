import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "./App";
import Reg from "./Reg";
import Login from "./Login";

const Main = () => {
    return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/reg"} element={<Reg />} />
      </Routes>
    </Router>
    )
}

export default Main