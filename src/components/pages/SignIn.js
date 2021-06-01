import React, { Component } from 'react'

export default class SignIn extends Component {
    constructor(props){
        super(props);


        this.state={
            'email':'',
            'password':''
        }
    }
    
    handleSubmit = (e)=>{
        e.preventDefault();

        this.setState({'email':'','password':''})
    }

    handleChange = (e)=>{
        const {value,name}=e.target;

        this.setState({[name]:value})
    }

    render() {
        return (
            <div>
                <h1>I already have an account</h1>
                <span>Sign in with your email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} required />
                    <label>email</label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} required />
                    <label>password</label>

                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}