import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'


function Header() {
  const [count, setCount] = useState(0)
  const htmlCode = `
  <header>
    <div id="header">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a id="home" class="nav-link active" aria-current="page" href="">Home</a>
                        </li>
                        <li class="nav-item">
                            <a id="about" class="nav-link active" aria-current="page" href="">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <h1 class="blog_title">嘉's Blog</h1>
	</header>`;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
    </>
  )
}

export default Header
