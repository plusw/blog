import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';

function Header({ titleColor, title, backgroundImage }) {
  const [blogTitle, setBlogTitle] = useState(title || "嘉's Blog");
  useEffect(() => {
    setBlogTitle(title || "嘉's Blog");
  }, [title]);
  const titleStyle = {
    color: `${titleColor || "white"}`
  }
  const headerStyle = {
    backgroundImage: `url(${backgroundImage || "https://plusw.github.io/blog_/public/source/header_2.jpg"})`,
    // backgroundImage: `url(${backgroundImage || "https://plusw.github.io/blog/public/source/header_2.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  };

  return (
    <>
      <header style={headerStyle}>
        <div id="header">
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
              <a className="navbar-brand" href="/blog/#blog" style={titleStyle}>
                嘉's Blog
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto"> {/* ms-auto pushes the element to the right */}
                  <a className="nav-link active" aria-current="page" href="/blog/#blog">
                    Home
                  </a>
                  <a className="nav-link active" href="/blog/#about">
                    About
                  </a>

                </div>
              </div>
            </div>
          </nav>
        </div >
        <h1 className="blog_title" ></h1>
      </header >
    </>
  );
}

export default Header;
