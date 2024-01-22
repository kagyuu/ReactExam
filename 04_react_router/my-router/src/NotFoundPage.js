import {Link, useParams} from 'react-router-dom';

export default function NotFoundPage () {
    const {'*': paths} = useParams();
    return (
        <>
          Sorry, PATH <b>{paths}</b> not found.
          <br/>
          <Link to="/">Top</Link>
        </>
    );
}