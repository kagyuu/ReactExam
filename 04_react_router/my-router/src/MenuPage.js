import {NavLink} from 'react-router-dom';
import {useRecoilValue} from "recoil";
import {counterAtom} from "./logic/state";

export default function MenuPage() {
    const count = useRecoilValue(counterAtom);

    return (
        <>
            <ul>
                <li><NavLink to="/">Top</NavLink></li>
                <li><NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/edit/0">New Page</NavLink></li>
                <li><NavLink to="/article/001">Diary</NavLink></li>
                <li><NavLink to="/article/002">Tech Blog</NavLink></li>
                <li><NavLink to="/article/003">Book Review</NavLink></li>
                <li><NavLink to="/error/123">Error Page</NavLink></li>
            </ul>
            <p align="center">COUNTER: {count}</p>
        </>
    );
}