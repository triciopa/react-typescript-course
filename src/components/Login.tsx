import React from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps {
  authService: AuthService
}

interface LoginState {
  userName: string,
  password: string,
  loginAttempted: boolean,
  loginSuccesful: boolean
}

export class Login extends React.Component<LoginProps, LoginState> {
  
  state: LoginState = {
    userName: '',
    password: '',
    loginAttempted: false,
    loginSuccesful: false,
  }

  render(){
    return (
      <div>
        <h2>Please login</h2>
        <form action="">
          <input type="text" value={this.state.userName} />
          <input type="password" value={this.state.password} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}