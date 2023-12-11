import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const Navbar = () => {
    return (
        <div>      
            <nav className="menuQuanLi">
                <ul className='menuQuanLi_ul'>
                    <li className='menuQuanLi_ul-li'><NavLink to="/timer">Time</NavLink></li>
                    <li className='menuQuanLi_ul-li'><NavLink to="/listUser">List User</NavLink></li>
                    <li className='menuQuanLi_ul-li'><NavLink to="/myComment">Comment</NavLink></li>
                    <li className='menuQuanLi_ul-li'><NavLink to="/learnScss">Scss</NavLink></li>
                    <li className='menuQuanLi_ul-li'><NavLink to="/learnReduxAndRef">Redux_Ref</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;