import React, {Component} from "react"
import axios from 'axios';

import {EmailInput} from './EmailInput'
import {PasswordInput} from './PasswordInput'
import {Button} from './Button'
import {NavLink, Redirect} from "react-router-dom";
import Helpers from "./Helpers";

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = `https://geekhub-frontend-js-9.herokuapp.com`;

interface IState {
    userData?: any,
    isAuth?: boolean;
}

class LoginGetRequestContainer extends Component <{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: [],
            isAuth: false,
        }
    }

    componentDidMount() {
        localStorage.getItem('token');
        if (localStorage.getItem('token')) {
            axios({
                method: 'get',
                url: `${axios.defaults.baseURL}/api/users/`,
                headers: {
                    'x-access-token': localStorage.token,
                }
            })
                .then(response => response)
                .then(data => {
                    if (data.status === 200) {
                        this.setState({
                            userData: data,
                            isAuth: true,
                        });
                    }
                })
                .catch((error: string) => {
                    console.error(error);
                });
        }
    }

    render() {
        return (
            <> {this.state.isAuth ?
                (<Redirect to='/projects/'/>) : (<Redirect to='/login'/>)}
            </>)
    }
}


interface IState {
    userData?: any,
    email?: string,
    password?: string,
    isAuth?: boolean,
}

interface IProps {
    email?: string,
    password?: string,
}

export default class LoginPostRequestContainer extends Component <IProps, IState> {
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

    loginPostRequest() {
        axios({
            method: 'post',
            url: `${axios.defaults.baseURL}/api/users/login`,
            data: {
                email: this.state.email,
                password: this.state.password
            },
        })
            .then(response => response)
            .then((data) => {
                if (data.status === 200) {
                    let token = data.headers['x-auth-token'];
                    localStorage.setItem('token', token);
                    this.setState({
                        userData: data,
                        isAuth: true,
                    });
                    console.log(data)
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
            <>
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
                            value={this.state.email}
                            handleChange={this.handleChange}/>
                        <PasswordInput
                            value={this.state.password}
                            handleChange={this.handleChange}/>
                        <Button> Log in </Button>
                    </form>
                    <NavLink className='auth-navigation' to='reset_password'>
                        Forgot password?
                    </NavLink>
                    {this.state.isAuth ? (<Redirect to='/projects/'/>) : (<Helpers/>)}
                </div>

                <LoginGetRequestContainer/>
            </>
        )
    }
}
