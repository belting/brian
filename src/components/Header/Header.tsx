import React from 'react';
import "./Header.css";
import profileImage from '../../images/be-profile.jpg';

interface IHeader {
  name: string;
  title: string;
  summary: string;
}

interface IHeaderProps {
  header: IHeader;
}

const Header: React.FC<IHeaderProps> = ({ header }) => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 d-none d-lg-block align-self-center">
          <img className="profile-image" src={profileImage} alt="Brian Elting" />
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="heading">
            <img className="profile-image d-inline-block d-lg-none" src={profileImage} alt="Brian Elting" />
            <div className="title">
              <h1>{header.name}</h1>
              <h2>{header.title}</h2>
            </div>
          </div>
          <p>{header.summary}</p>
        </div>

      </div>
    </div>
  </header>
);

export default Header;