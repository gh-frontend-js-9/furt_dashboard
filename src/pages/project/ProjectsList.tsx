import React from 'react';
import '../App.css';
import {Navigation} from './Navigation';
import {Header} from "../Header";
import {Sidebar} from "./Sidebar";
import {SortRow} from "./Sort";
import ProjectContainer from './ProjectContainer';

const ProjectsList: React.FC = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <Sidebar/>
                <div className='main__container'>
                    <SortRow/>
                    <Navigation/>
                    <ProjectContainer/>
                </div>
            </div>
        </>
    )
};

export default ProjectsList
