import React from 'react';
import './App.css';
import {Title} from './Title';
import ProjectContainer from './ProjectContainer';
import {Header} from "../Header";

const App: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <Title />
                <ProjectContainer />
            </main>
        </>
    )
};

export default App
