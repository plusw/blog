import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header2.jsx"
import ArticleList from "./ArticleList.jsx"
import Article from "./Article.jsx"
import About from "./About"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<ArticleList />} />
        <Route path="/blog/about/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
