import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header({ title, backgroundImage }) {
  const [blogTitle, setBlogTitle] = useState(title || "嘉's Blog");

  useEffect(() => {
    setBlogTitle(title || "嘉's Blog");
  }, [title]);

  const headerStyle = {
    // backgroundImage: `url(${backgroundImage || "/blog/public/source/header_2.jpg"})`,
    backgroundImage: `url(${backgroundImage || "../public/source/header_2.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  };

  return (
    <header style={headerStyle}>
      {/* <header> */}
      <div id="header">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a id="home" className="nav-link active" aria-current="page" href="/blog/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a id="about" className="nav-link active" aria-current="page" href="/blog/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <h1 className="blog_title">{blogTitle}</h1>
    </header>
  );
}

export default Header;
