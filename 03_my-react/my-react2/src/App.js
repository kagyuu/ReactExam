import './App.css';
import { useState } from "react";

// 拡張子 js mjs jsx ts tsx は省略できる。将来 TypeScript 化しても import を変えなくていい
import Header from './Header'
import Menu from './Menu'
import Body from './Body'
import Footer from './Footer'

function App() {
  const [CITIES, updateCities] = useState([]);

  const callbackFromMenu = (cities) => {
    updateCities(cities);
  };

  return (
    <div id="layoutContainer">
      {/* 子コンポーネントに、JSXを渡せる。子コンポーネント側からは、引数 children で取得できる */}
      <div id="header">
        <Header>
          <h1>Weather Information</h1>
        </Header>
      </div>
      <div id="nav"><Menu callback={callbackFromMenu}/></div>
      <div id="body"><Body cities={CITIES}/></div>
      {/* 子コンポーネントに、タグ属性でパラメータを渡せる(props)。 props には Javascript (配列や関数) も渡せる */}
      <div id="footer"><Footer name="MYCompay" year="2024"/></div>
    </div>
  );
}

export default App;
