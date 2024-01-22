import {Link, useParams} from 'react-router-dom';

export default function EditPage () {
    const {id} = useParams();  
    return (
        <>
          This is Edit {id} Page.
          <br/>
          <Link to={`/article/${id}`}>Article</Link>
        </>
    );
}