import { Route, Routes } from 'react-router-dom';
// import pagesData from './pagesData';
import pagesData from './pagesData';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const RouterMain = () => {
  return (
    <div>
      <div>
        <Sidebar />
        <Header />
      </div>
      <Routes>
        {pagesData.map(({ path, title, element }) => {
          return <Route key={title} path={`/${path}`} element={element} />;
        })}
      </Routes>
    </div>
  );
};

export default RouterMain;
