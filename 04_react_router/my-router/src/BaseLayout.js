import './App.css';
import MenuPage from './MenuPage';
import {Outlet} from 'react-router-dom';

export default function BaseLayout() {
    return (
        <div id="layoutContainer">
            <div className="header">
                Header
            </div>
            <div className="nav">
                <MenuPage/>
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