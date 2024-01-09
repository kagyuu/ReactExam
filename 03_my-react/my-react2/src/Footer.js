import { useState } from 'react';

// function Footer (props) {...} と記述することもできる
// その場合は {props.year} {props.name} で参照する 
export default function Footer({name, year}) {

    // useState() の返り値は、配列 [値, 値を設定する関数]
    const [yy, setYY] = useState( Number(year) );
    const handleClick = () => {
        setYY(yy+1);
    };

    return (
        <>
        <p onClick={handleClick}>
        Copyright © {yy} {name} All Rights Reserved.
        </p>
        </>
    );
}