import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header.jsx"
import ArticleList from "./ArticleList.jsx"
import Article from "./Article.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ArticleList />
    {/* <Article /> */}
  </React.StrictMode>,
)
