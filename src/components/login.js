import React from "react"

export default class LogIn extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="card-body">
                    <h3>Login</h3>
                </div>
                <input className='user-input' placeholder="Enter Username"></input>
                <input className="user-input" type="password" placeholder="Enter Password"></input>
                <button className='login-button'>Login</button>
          </div> 
        );
    }
}