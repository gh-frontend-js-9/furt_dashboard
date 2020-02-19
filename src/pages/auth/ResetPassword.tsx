import React, {Component} from "react"
import axios from 'axios';
import {EmailInput} from './EmailInput'
import {PasswordInput} from './PasswordInput'
import {Button} from './Button'
import {ConfirmationPasswordInput} from './ConfirmationPasswordInput'
import {NavLink, Redirect} from "react-router-dom";
import Helpers from "./Helpers";

axios.defaults.baseURL = `https://geekhub-frontend-js-9.herokuapp.com`;

interface IState {
    userData?: any,
    email?: string,
    password?: string,
    confirmationPassword?: string,
    responseOk?:boolean
}

interface IProps {
    email?: string,
    password?: string,
    confirmationPassword?: string
}

export default class ResetPassword extends Component <IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: [],
            responseOk:false
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

    resetPassPostRequest() {
        localStorage.getItem('token');
        axios({
            method: 'post',
            url: `${axios.defaults.baseURL}/api/users/reset_password`,
            data: {
                email: this.state.email,
                password: this.state.password,
                confirmationPassword: this.state.confirmationPassword
            },
            headers: {
                'x-access-token': localStorage.token,
            }
        })
            .then(response => response.data)
            .then((data) => {
                if (data.status === 200) {
                this.setState({
                    userData: data,
                    responseOk:true
                })}
            })
            .catch((error: string) => {
                console.error(error);
            });
    }

    handleSubmit(event: {
        preventDefault: () => void;
    }) {
        event.preventDefault();
        this.resetPassPostRequest();
    }

    render() {
        return (
            <>
                <div className="auth-container">
                    <h2 className="auth-container__title">
                        Reset Password
                    </h2>
                    <NavLink className='auth-navigation' to='/login'>
                        Log in
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
                        <ConfirmationPasswordInput
                            value={this.state.confirmationPassword}
                            handleChange={this.handleChange}/>
                        <Button> OK </Button>
                    </form>

                    {this.state.responseOk ? (<Redirect to='/login'/>) : <Helpers/>}
                </div>

            </>
        )
    }
}


