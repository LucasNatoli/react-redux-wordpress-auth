import React, { Component } from "react";
import MyTabs from '../Layout/MyTabs';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


class Authenticate extends Component {

render() {
  return (
      <MyTabs>
        <div label="Log In">
          <LoginPage/>
        </div>
        <div label="Sign Up">
          <RegisterPage/>
        </div>
      </MyTabs>
    );
  }
}

export default Authenticate;