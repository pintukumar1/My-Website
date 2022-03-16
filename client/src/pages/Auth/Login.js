import React, { Component } from 'react'
import classes from './Login.module.css'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
        this.emailChangeHandler = this.emailChangeHandler.bind(this)
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this)
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    emailChangeHandler(event) {
        this.setState({email: event.target.value})
    }

    passwordChangeHandler(event) {
        this.setState({password: event.target.value })
    }

    formSubmitHandler(event) {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(user);

        this.setState({email: "" , password: "" })
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler} className={classes.Login}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        id="email" 
                        type="email" 
                        value={this.state.email} 
                        onChange={this.emailChangeHandler} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password"  
                        type="password" 
                        value={this.state.password} 
                        onChange={this.passwordChangeHandler} />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    } 
}

export default Login