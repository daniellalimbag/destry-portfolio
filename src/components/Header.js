import React from 'react';
import heroBackground from '../assets/pexels-jan-van-der-wolf-11680885-32239084.jpg';

const Header = () => {
  return (
    <header
      id="home"
      className="header"
      style={{ '--hero-image': `url(${heroBackground})` }}
    >
      <div className="container hero-content">
        <div className="brand-lockup">
          <span className="eyebrow">Planning Engineer</span>
          <h1>Destry Limbag</h1>
          {/* <p>Lorem ipsum dolor sit amet.</p> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
