import React, {Component} from "react"
import axios from 'axios';
import {EmailInput} from './EmailInput'
import {PasswordInput} from './PasswordInput'
import {Button} from './Button'
import {ConfirmationPasswordInput} from './ConfirmationPasswordInput'

axios.defaults.baseURL = `https://geekhub-frontend-js-9.herokuapp.com`;

//axios.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU';

interface IState {
    userData?: any,
    email?: string,
    password?: string,
    confirmationPassword?: string
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
        axios({
            method: 'post',
            url: `${axios.defaults.baseURL}/ reset_password`,
            data: {
                email: this.state.email,
                password: this.state.password,
                confirmationPassword: this.state.confirmationPassword
            },
            headers: {
                'x-access-token': 'null',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.data)
            .then((data: object) => {
                this.setState({
                    userData: data,
                });
                console.log(data)
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
            <div className="auth-container">
                <h2 className="auth-container__title">
                    Reset Password
                </h2>
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
                    <ConfirmationPasswordInput
                        name='confirmationPassword'
                        value={this.state.confirmationPassword}
                        handleChange={this.handleChange}/>
                    <Button type='submit'>
                        OK
                    </Button>
                </form>
            </div>
        )
    }
}


