import React, {Component} from "react"
import axios from 'axios';

import {Form} from "./Form";
import {NameInput} from './NameInput'
import {EmailInput} from './EmailInput'
import {PasswordInput} from './PasswordInput'
import {Button} from './Button'

axios.defaults.baseURL = `https://geekhub-frontend-js-9.herokuapp.com`;
//axios.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU';
interface IState {
    userData?: any,
    email?: any,
    password?: any,
    name?: any
}

interface IProps {
    email?: any,
    password?: any,
    name?: any
}

export default class SignUpContainer extends Component <IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: [],
            email: "",
            password: "",
            name: ""
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
            url: `${axios.defaults.baseURL}api/users/`,
            data: {
                email: this.state.email,
                password: this.state.password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.data)
            .then((data: any) => {
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
                <Form key={this.state.userData._id}
                               onSubmit={this.handleSubmit}>
                    <NameInput
                        name={this.state.userData.name}
                        value={this.state.name}
                        handleChange={this.handleChange}/>
                    <EmailInput
                        name={this.state.userData.email}
                        value={this.state.email}
                        handleChange={this.handleChange}/>
                    <PasswordInput
                        name={this.state.userData.password}
                        value={this.state.password}
                        handleChange={this.handleChange}/>
                    <Button onClick={this.handleSubmit}>
                        Sign up
                    </Button>
                </Form>
            </div>
        )
    }
}


