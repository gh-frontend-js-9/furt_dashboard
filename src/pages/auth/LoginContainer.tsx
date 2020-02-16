import React, {Component} from "react"
import axios from 'axios';

import {Form} from "./Form";
import {EmailInput} from './EmailInput'
import {PasswordInput} from './PasswordInput'
import {Button} from './Button'

//axios.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU';
interface IState {
    userData?: any,
    email?: any,
    password?: any,
}

interface IProps {
    email?: any,
    password?: any,
}

export default class LoginContainer extends Component <IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: [],
            email: "",
            password: ""
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
        this.loginPostRequest();
    }

    render() {
        return (
            <div className="auth-container">
                <h2 className="auth-container__title">
                    Log in
                </h2>
                <Form key={this.state.userData._id}
                               onSubmit={this.handleSubmit}>
                    <EmailInput
                        name={this.state.userData.email}
                        value={this.state.email}
                        handleChange={this.handleChange}/>
                    <PasswordInput
                        name={this.state.userData.password}
                        value={this.state.password}
                        handleChange={this.handleChange}/>
                    <Button onClick = {this.handleSubmit}>
                        Log in
                    </Button>
                </Form>
            </div>
        )
    }
}


