import React from 'react';
import Activities from '../pages/page/Activities';
import Demographics from '../pages/page/Demographics';
import Profil from '../pages/page/Profil';

const Home = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <Profil />
          <Demographics />
          <Activities />
        </div>
      </div>
    </>
  );
};

export default Home;

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
