import React, {Component} from "react"
import axios from 'axios';

import {NameInput} from './NameInput'
import {EmailInput} from './EmailInput'
import {PasswordInput} from './PasswordInput'
import {Button} from './Button'

axios.defaults.baseURL = `https://geekhub-frontend-js-9.herokuapp.com`;

//axios.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU';
interface IState {
    userData?: any,
    email?: string,
    password?: string,
    name?: string,
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
            headers: {
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

    handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        this.signUpPostRequest();
    }

    render() {
        return (
            <div className="auth-container">
                <h2 className="auth-container__title">
                    Sign Up
                </h2>
                <form key={this.state.userData._id}
                      className='form'
                      name="form"
                      onSubmit={this.handleSubmit}>
                    <NameInput
                        value={this.state.name}
                        handleChange={this.handleChange}/>
                    <EmailInput
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}/>
                    <PasswordInput
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}/>
                    <Button type='submit'>
                        Sign up
                    </Button>
                </form>
            </div>
        )
    }
}


