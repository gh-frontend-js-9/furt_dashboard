import React, {Component} from "react"
import axios from 'axios';

import {EmailInput} from './EmailInput'
import {PasswordInput} from './PasswordInput'
import {Button} from './Button'
import {NavLink} from "react-router-dom";

axios.defaults.baseURL = `https://geekhub-frontend-js-9.herokuapp.com`;

function sendRequestForCurrent() {
    localStorage.getItem('token');
    if (localStorage.getItem('token')) {
        fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/', {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token,
            }
        }).then((response) => {
            console.log(response);
            return response.json();
        }).catch((error) =>{
            console.log('error')
        });
        console.log(localStorage.token)
    }
}
sendRequestForCurrent();

interface IState {
    userData?: any,
    email?: string,
    password?: string,
    replace?: boolean
    isAuth?: boolean
}

interface IProps {
    email?: string,
    password?: string,
}

export default class LoginContainer extends Component <IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: [],
            isAuth: false
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

    loginPostRequest() {
        axios({
            method: 'post',
            url: `${axios.defaults.baseURL}/api/users/login`,
            data: {
                email: this.state.email,
                password: this.state.password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response)
            .then((data) => {
                if (data.status === 200) {
                    let token = data.headers['x-auth-token'];
                    localStorage.setItem('token', token);
                    this.setState({
                        userData: data,
                    });
                    window.location.href = `/api/projects/`
                    //window.location.href = `/api/projects/`
                }
            })
            .catch((error: string) => {
                console.error(error);
            });
    }

    handleSubmit(event: {
        preventDefault: () => void;
    }) {
        event.preventDefault();
        this.loginPostRequest();
    }

    render() {
        return (
            <div className="auth-container">
                <h2 className="auth-container__title">
                    Log in
                </h2>
                <NavLink className='auth-navigation' to='/'>
                    Not a member?
                </NavLink>
                <form key={this.state.userData._id}
                      className='form'
                      name="form"
                      onSubmit={this.handleSubmit}>
                    <EmailInput
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}/>
                    <PasswordInput
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}/>
                    <Button type='submit'>
                        Log in
                    </Button>
                </form>
                <NavLink className='auth-navigation' to='reset_password'>
                    Forgot password?
                </NavLink>
            </div>
        )
    }
}


