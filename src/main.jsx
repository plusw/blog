import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Header from "./Header2.jsx"
import ArticleList from "./ArticleList.jsx"
import Article from "./Article.jsx"
import About from "./About"

export default function App() {
  return (
    // <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
    <HashRouter>
      <Routes>
        <Route path="/blog" element={<ArticleList />} />
        <Route path="/blog/about" element={<About />} />
        {/* <Route path="" element={<ArticleList />} />
        <Route path="" element={<About />} /> */}
      </Routes>
    </HashRouter >
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
