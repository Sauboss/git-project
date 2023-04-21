import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
      <div className="container">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  </div>
  </div>
  );
}

export default App;
