import React from 'react';
import "./Footer.css";

const Footer: React.FC = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <span className="copyright">&copy; 2022 Brian Elting</span>
          <a className="source" href="https://github.com/belting/brian" target="_blank" rel="noopener noreferrer">View Source</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
