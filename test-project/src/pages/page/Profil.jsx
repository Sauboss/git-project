import React from 'react';

const Profil = () => {
  return (
    <div>
      <div className="content__title">Profile</div>
      <div className="content__block">
        <div className="content__container">
          <div className="name__block">
            <div className="name">Name</div>
            <input type="text" className="input__name" />
          </div>
          <div className="surname__block">
            <div className="surname">Surname</div>
            <input type="text" className="input__name" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profil;
