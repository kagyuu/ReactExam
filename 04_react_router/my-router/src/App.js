import './App.css';
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import './index.css';
import BaseLayout from './BaseLayout';
import TopPage from './TopPage';
import ArticlePage from './ArticlePage';
import EditPage from './EditPage';
import EditAction from './logic/EditAction';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout/>}>
      <Route path="" element={<TopPage/>}/>
      <Route path="article/:id" element={<ArticlePage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="edit/:id" element={<EditPage/>} action={EditAction}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  )
  // 第二引数を省略すると React Router の URL は、サイト直下 https://example.com/article になる
  // 第二引数で、ベースURLを指定すると basename下 https://example.com/myapp/article になる
  //, {basename: '/myapp'}
)

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
