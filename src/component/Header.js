import React from 'react';
import {NavLink} from "react-router-dom";
import Today from "./Today";
import Animals from "./Animals";
import LoginForm from './login-form';
import {BrowserRouter, Route} from "react-router-dom";

const Header = () => {
  return (
      <div >
    <BrowserRouter>
      <div>
        <div>
        <NavLink  to="/Today" >Today</NavLink>
        <NavLink  to="/Animals" >Animals</NavLink>
        <NavLink to="/LoginForm" >LoginForm</NavLink>
        </div>
        <div >
        <Route path='/Today' render={ () => <Today />}/>
        <Route path='/LoginForm' render={ () => <LoginForm />}/>
        <Route path='/Animals' render={ () => <Animals />}/>
        </div>
      </div>
    </BrowserRouter>
    </div>)
}

export default Header;
