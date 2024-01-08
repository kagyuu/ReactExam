import './App.css';
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
      <div id="footer"><Footer/></div>
    </div>
  );
}

export default App;
