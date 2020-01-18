import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <div>
                <a href="#" className={s.item}>Profile</a>
            </div>
            <div>
                <a href="#" className={s.item}>Messages</a>
            </div>
            <div>
                <a href="#" className={s.item}>News</a>
            </div>
            <div>
                <a href="#" className={s.item}>Music</a>
            </div>
            <div>
                <a href="#" className={s.item}>Setting</a>
            </div>
        </div>
    )
}

export default Navbar;