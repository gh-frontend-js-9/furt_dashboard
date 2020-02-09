import React from "react";
import './project/App.css';
//import CreateProjectContainer from './project/CreateProjectContainer'
export const Header: React.FC = () => {
    return (
        <header className={'header'}>
            <div className={'logo'}>
            </div>

            <div>
                <button className={'button button--hovered'}>
                    Add +
                    {/*<CreateProjectContainer />*/}
                </button>
            </div>
        </header>
    );
};



