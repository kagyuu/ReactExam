import {Link} from 'react-router-dom';

export default function TopPage () {
    return (
        <>
          This is Top Page.
          <br/>
          <Link to="/about">About Us</Link>
        </>
    );
}