import React, { Component } from 'react'
import classes from './Register.module.css'
import axios from 'axios'

class Register extends Component {
    constructor() {
        super(); 
            this.state = {
                name: "",
                email: "",
                password: "",
                confirmpassword: "",
                errors: {}
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this)
        this.emailChangeHandler = this.emailChangeHandler.bind(this)
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this)
        this.confirmpasswordChangeHandler = this.confirmpasswordChangeHandler.bind(this)
        this.formSubmitHandler = this.formSubmitHandler.bind(this)
    }

    nameChangeHandler(event) {
        this.setState({name: event.target.value})
    }

    emailChangeHandler(event) {
        this.setState({email: event.target.value})
    }

    passwordChangeHandler(event) {
        this.setState({password: event.target.value})
    }

    confirmpasswordChangeHandler(event) {
        this.setState({confirmpassword : event.target.value})
    }

    formSubmitHandler(event) {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2 : this.state.confirmpassword
        }

        axios.post('http://localhost:5000/api/users/register' , newUser)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        this.setState({name: '', email: '', password: '',confirmpassword: ''})
    }

    render() {
        return (
            <form
                onSubmit = {this.formSubmitHandler} 
                className={classes.Register} >
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name" 
                        type="text" 
                        value={this.state.name}
                        onChange={this.nameChangeHandler} />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        id="email" 
                        type="email" 
                        value={this.state.email}
                        onChange={this.emailChangeHandler} />
                    <small style={{color: "grey"}}>This site uses Gravatar, so if you want to add a profile picture, use your Gravatar email.</small>
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
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input 
                        id="confirmpassword" 
                        type="password" 
                        value={this.state.confirmpassword}
                        onChange={this.confirmpasswordChangeHandler}></input>
                </div>
                <div>
                    <button> Register </button>
                </div>
            </form>
        )
    } 
}

export default Register