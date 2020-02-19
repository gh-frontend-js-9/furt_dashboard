import React from "react";
import './App.css';
import {ModalWindow} from "./ModalWindow";

export const Header: React.FC = () => {
    const icons = [
        ' fa-search fa-lg',
        ' fa-bell-o fa-lg',
        ' fa-user fa-3x',
        ' fa-angle-down',
    ];
    let renderIcon = icons.map((icon: string, n: number) => {
        return <span key={n} className="nav-bar__item">
                    <a href="/">
                        <i className={`${icon} fa fa--hovered`}  aria-hidden="true"> </i>
                    </a>
                </span>
    });
    return (
        <header className='header'>
            <div className='header__logo'>
                <img alt='Virtus' src={require('../assets/images/logo.png')}/>
            </div>

            <div className='nav-bar header__nav-bar'>
                <ModalWindow/>
                {renderIcon}
            </div>
        </header>
    );
};



