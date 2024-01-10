import './App.css';

export default function Menu({callback}) {
    const handleMenuClick = (area) => {
        callback(area);
    };
    
    return (
        <ul>
        {/* onClick に設定できるのは関数オブジェクトなので、引数渡したいときには無名関数を設定して、そこから引数付きでハンドラを呼び出す */}
        <li><button className="link-style-btn" onClick={() => handleMenuClick('ja')}>Japan</button></li>
        <li><button className="link-style-btn" onClick={() => handleMenuClick('cn')}>China</button></li>
        <li><button className="link-style-btn" onClick={() => handleMenuClick('us')}>US</button></li>
        <li><button className="link-style-btn" onClick={() => handleMenuClick('eu')}>Europe</button></li>
        </ul>
    );
}