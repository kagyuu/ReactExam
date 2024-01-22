import {Link, useParams} from 'react-router-dom';

export default function ArticlePage () {
    const {id} = useParams();
    return (
        <>
          This is Article {id} Page.
          <br/>
          <Link to={`/edit/${id}`}>Edit</Link>
        </>
    );
}