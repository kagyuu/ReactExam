import {useRecoilState} from "recoil";
import {Link} from 'react-router-dom';
import {counterAtom} from "./logic/state";

export default function TopPage () {
    const [count, setCount] = useRecoilState(counterAtom);

    const handleClick = () => {
      setCount(count + 1);
    }
    return (
        <>
          This is Top Page.
          <br/>
          <button onClick={handleClick}>Count UP</button>
          <br/>
          <Link to="/about">About Us</Link>
        </>
    );
}