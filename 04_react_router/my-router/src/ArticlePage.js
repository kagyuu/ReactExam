import {Link, useParams} from 'react-router-dom';
import {artilceSelector} from "./logic/state";
import {useRecoilValue} from "recoil";

export default function ArticlePage () {
    const {id} = useParams();
    const article = useRecoilValue(artilceSelector(parseInt(id)));

    return (
        <>
          Article #{id}. <br/>
          <h1>{article.title}</h1>
          <pre>{article.subject}</pre>
          <br/>
          <Link to={`/edit/${id}`}>Edit</Link>
        </>
    );
}