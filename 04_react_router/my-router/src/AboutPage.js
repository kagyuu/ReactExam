import {useRecoilState} from "recoil";
import {Link} from 'react-router-dom';
import {counterAtom} from "./logic/state";

export default function AboutPage () {
  const [count, setCount] = useRecoilState(counterAtom);

  const handleClick = () => {
    setCount(count > 0 ? count - 1 : count);
  }

  return (
        <>
          This is About Page.
          <br/>
          <button onClick={handleClick}>Count DOWN</button>
          <br/>
          <Link to="/">Top</Link>
        </>
    );
}