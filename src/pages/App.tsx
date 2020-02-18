import React from 'react';
import './App.css';
import LoginContainer from './auth/LoginContainer'
import SignUpContainer from "./auth/SignUpContainer";
import ResetPassword from "./auth/ResetPassword";
import {Switch, Route} from 'react-router-dom';
import ProjectsList from "./project/ProjectsList";

const App: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path='/login' component={LoginContainer}/>
                <Route exact path='/' component={SignUpContainer}/>
                <Route path='/reset_password' component={ResetPassword}/>
                <Route path='/projects/' component={ProjectsList}/>
            </Switch>
            </>
    )
};

export default App
