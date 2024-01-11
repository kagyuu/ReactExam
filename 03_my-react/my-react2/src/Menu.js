import './App.css';

const JP_CITIES = ["Sapporo","Sendai","Tokyo","Nagoya","Kyoto","Osaka","Kobe","Hiroshima","Fukuoka","Okinawa"];
const CN_CITIES = ["Beijing","Chengdu","Chongqing","Dongguan","Guangzhou","Nanchong","Nanjing","Shanghai"
,"Shenzhen","Tianjin","Wuhan","Xi'an"];
const US_CITIES = ["Anchorage","Chicago","Dallas","Denver","Honolulu","Houston","Los Angeles","Miami","New York"
,"Palo Alto","Philadelphia","Phoenix","San Francisco","Seattle","Washington"    
];
const EU_CITIES = ["Vienna","Brussels","Sofia","Copenhagen","Helsinki","Paris","Berlin","Athens","Nuuk","Reykjavik"
,"Dublin","Rome","Oslo","London"];

export default function Menu({callback}) {
    const handleMenuClick = (area) => {
        switch(area) {
        case 'ja':
            callback(JP_CITIES);
            break;
        case 'cn':
            callback(CN_CITIES);
            break;
        case 'us':
            callback(US_CITIES);
            break;
        case 'eu':
            callback(EU_CITIES);
            break;
        default:
            callback([]);
            break;
        }
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