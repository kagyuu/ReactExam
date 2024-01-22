import './App.css';
import {NavLink, Outlet} from 'react-router-dom';

export default function BaseLayout() {
    return (
        <div id="layoutContainer">
            <div className="header">
                Header
            </div>
            <div className="nav">
                <ul>
                    <li><NavLink to="/">Top</NavLink></li>
                    <li><NavLink to="/article/001">Diary</NavLink></li>
                    <li><NavLink to="/article/002">Tech Blog</NavLink></li>
                    <li><NavLink to="/article/003">Book Review</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
                    <li><NavLink to="/error/123">Error Page</NavLink></li>
                </ul>
            </div>
            <div className="body">
                <Outlet/>
            </div>
            <div className="footer">
                Footer
            </div>
        </div>
    );
}