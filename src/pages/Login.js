import React, { Component } from 'react';
import '../App.css';
import '../img/khalidit-logo.png';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

export default class Login extends Component {

    // handleClick=()=>{

    //     history.pushState("/home")
    // };

    render() {
        return (
            <div>
                <form action="/action_page.php" method="post" style={{ maxWidth: "350px",borderRadius: "15px"}}>
                    <div class="imgcontainer">
                        <img src="khalidit-logo.png" alt="Avatar" class="avatar" />
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox"  name="remember" /> Remember me
                        </label>
                    </div>

                    <div class="container" style={{ backgroundColor: "darkcyan",borderRadius: "9px"}}>
                        <button type="button" class="cancelbtn">Cancel</button>
                        <span class="psw">Forgot password?</span>
                    </div>
                </form>
            </div>
        )
    }
}
