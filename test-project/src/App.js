import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { store } from './redux/store';
// import Header from './components/Header';
// import Home from './components/pegas/Home';
// import Sidebar from './components/pegas/Sidebar';

// function App() {
// return (
//   <>

//     <div>
//       <Sidebar />
//       <Header />
//     </div>
//     <div className="content">
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </div>
//   </>
// );
// }

// export default App;

import { BrowserRouter } from 'react-router-dom';
import RouterMain from './pages/router';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RouterMain />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
