import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "./App";
import Reg from "./Reg";
import Login from "./Login";
import Client from "./Client";
import Admin from "./Admin";
import ClientOrder from "./ClientOrder";

const Main = () => {
    return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/reg"} element={<Reg />} />
        <Route path={"/client"} element={<Client/>}/>
        <Route path={"/admin"} element ={<Admin/>}/>
        <Route path={"/clientorder"} element = {<ClientOrder/>}/>
      </Routes>
    </Router>
    )
}

export default Main