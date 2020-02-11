import React from "react";
import './project/App.css';
import {ModalWindow} from "./ModalWindow";

export const Header: React.FC = () => {
    return (
        <header className={'header'}>
            <div className={'logo'}>
            </div>

            <div>
                <ModalWindow/>
            </div>
        </header>
    );
};



