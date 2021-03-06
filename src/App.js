import React from "react";
// import {getUsers} from "./store/actions/usersAction"

import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import Today from "./component/Today";
import Animals from "./component/Animals";
import LoginForm from './component/login-form';
import Header from './component/Header';

// import { getToken } from "./store/actions/authAction";
// import Signin from './component/Signin';

function App() {
  return (
    <div>
    <Header/>
  </div>
  //   <BrowserRouter>
  //     <div className="App">
  //       <NavLink to="/Today" >Today</NavLink>
  //       <NavLink to="/Animals" >Animals</NavLink>
  //       <NavLink to="/LoginForm" >LoginForm</NavLink>

  //       <div>
  //       <Route path='/Today' render={ () => <Today />}/>
  //       <Route path='/LoginForm' render={ () => <LoginForm />}/>
  //       <Route path='/Animals' render={ () => <Animals />}/>
  //       </div>
        
  //     </div>
  //   </BrowserRouter>
  );
}

export default App;
