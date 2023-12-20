import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import ArticleList from "./ArticleList.jsx"
import Article from "./Article.jsx"
import About from "./About"

export default function App() {
  return (
    <>
      <HashRouter >
        <Routes>
          <Route path="/blog" element={<ArticleList />} />
          <Route path="/about/" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    {/* <ArticleList /> */}
  </React.StrictMode>,
)
