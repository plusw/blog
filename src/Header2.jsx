import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header({ title }) {
  const [blogTitle, setBlogTitle] = useState(title || "嘉's Blog");

  useEffect(() => {
    // 当 'title' 属性发生变化时更新博客标题
    setBlogTitle(title || "嘉's Blog");
  }, [title]);

  const headerStyle = {
    backgroundImage: `url("../public/source/header.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  };
  const htmlCode = `
  <header style={headerStyle}>
    <div id="header">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a id="home" class="nav-link active" aria-current="page" href="/blog/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a id="about" class="nav-link active" aria-current="page" href="/blog/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <h1 class="blog_title">${blogTitle}</h1>
	</header>`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
    </>
  );
}

export default Header;
