import {NavLink} from 'react-router-dom';
import {useRecoilValue} from "recoil";
import {counterAtom} from "./logic/state";
import {articleListSelector} from "./logic/state";

export default function MenuPage() {
    const count = useRecoilValue(counterAtom);
    const articleList = useRecoilValue(articleListSelector);

    return (
        <>
            <ul>
                <li><NavLink to="/">Top</NavLink></li>
                <li><NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/edit/0">New Page</NavLink></li>
                {articleList.map(article => (
                    <li key={article.id}>
                        <NavLink to={`/article/${article.id}`}>
                            {article.title.substring(0, Math.min(article.title.length, 10))}
                        </NavLink>
                    </li>
                ))}
                <li><NavLink to="/error/123">Error Page</NavLink></li>
            </ul>
            <p align="center">COUNTER: {count}</p>
        </>
    );
}