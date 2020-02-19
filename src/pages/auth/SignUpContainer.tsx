import React, {Component} from "react"
import axios from 'axios';

import {NameInput} from './NameInput'
import {EmailInput} from './EmailInput'
import {PasswordInput} from './PasswordInput'
import {Button} from './Button'
import {NavLink, Redirect} from "react-router-dom";
import Helpers from "./Helpers";

axios.defaults.baseURL = `https://geekhub-frontend-js-9.herokuapp.com`;

interface IState {
    userData?: any,
    email?: string,
    password?: string,
    name?: string,
    isAuth?: boolean,
}

interface IProps {
    email?: string,
    password?: string,
    name?: string,
}

export default class SignUpContainer extends Component <IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: [],
            isAuth: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: {
        target: {
            name: string;
            value: string;
        };
    }) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    signUpPostRequest() {
        axios({
            method: 'post',
            url: `${axios.defaults.baseURL}/api/users/`,
            data: {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
            },
        })
            .then(response => response.data)
            .then((data) => {
                if (data.status === 200) {
                this.setState({
                    userData: data,
                    isAuth: true,
                });
            }})
            .catch((error: string) => {
                console.error(error);
            });
    }

    handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        this.signUpPostRequest();
    }

    render() {
        return (
            <>
                <div className="auth-container">
                    <h2 className="auth-container__title">
                        Sign Up
                    </h2>
                    <NavLink className='auth-navigation' to='/login'>
                        Log in
                    </NavLink>
                    <form key={this.state.userData._id}
                          className='form'
                          onSubmit={this.handleSubmit}>
                        <NameInput
                            value={this.state.name}
                            handleChange={this.handleChange}/>
                        <EmailInput
                            value={this.state.email}
                            handleChange={this.handleChange}/>
                        <PasswordInput
                            value={this.state.password}
                            handleChange={this.handleChange}/>
                        <Button> Sign up </Button>
                    </form>

                    {this.state.isAuth ? (<Redirect to='/login'/>) : <Helpers/>}
                </div>
            </>
        )
    }
}


