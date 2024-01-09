import './App.css';
// 拡張子 js mjs jsx ts tsx は省略できる。将来 TypeScript 化しても import を変えなくていい
import Header from './Header'
import Menu from './Menu'
import Body from './Body'
import Footer from './Footer'

function App() {
  return (
    <div id="layoutContainer">
      <div id="header"><Header/></div>
      <div id="nav"><Menu/></div>
      <div id="body"><Body/></div>
      {/* 子コンポーネントに、タグ属性でパラメータを渡せる(props)。 props には Javascript (配列や関数) も渡せる */}
      <div id="footer"><Footer name="MYCompay" year="2024"/></div>
    </div>
  );
}

export default App;
