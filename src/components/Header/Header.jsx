import React from 'react';
import logo from '../../logo.png';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.Header}>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Header;