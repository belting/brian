import React from 'react';
import "./Header.css";
import profileImage from '../../images/be-profile.jpg';

const Header: React.FC = () => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-md-6 order-md-2 align-self-center">
          <h1>Brian Elting</h1>
          <h2>Web Developer</h2>
          <p>I'm a full stack web developer specializing in Node.js and AngularJS apps. Over the past few years, I have worked on a variety of social network and ecommerce platform integrations. I'm always looking to learn new technologies and deliver
                        the best user experience.</p>
        </div>
        <div className="col-md-5 order-md-1 align-self-center">
          <img className="profile-image scale-image" src={profileImage} alt="Brian Elting" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;