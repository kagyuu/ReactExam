import earth from './earth.png'
import './MyApp.css';

export default function MyApp() {
    // return で、HTML を返す
    const now = new Date().toLocaleDateString('ja-jp');
    const refTag = "<a href=\"https://react.dev/\">react.dev</a>";
    return (
        // return で返す HTML はルート要素を持たなければならない。
        // <div>~</div> などの HTML のタグでもいい。
        // HTMLタグで囲みたくない場合は <React.Fragment>~</React.Fragment> で囲む。
        // <>～</> は <React.Fragment>~</React.Fragment> の簡易表現で通常これを使う。
        <>
            {/* HTMLの中で Javascriptを実行するときには {} で囲む */}
            <p>{now}</p>
            {/* Javascript式はエスケープされます。エスケープを解除するときには dangerouslySetInnerHTMLを使う。 */}
            <p>{refTag}</p>
            <p dangerouslySetInnerHTML={{__html: refTag}}></p>
            {/* HTMLの中にコメントを書くときには Javascript 式 {} の中にコメントを書く。// は使えない */}
            <p>Hello World!</p>
            <p>你好世界!</p>
            {/* import した earth は 式{} で参照できる。💡"" で囲まない */}
            {/* JSX中では XHTML で記述する必要がある 単独のタグは <tag/> というように /> で閉じる */}
            <img src={earth} className="Mylogo" alt="Earth"/>
        </>
    );
};
