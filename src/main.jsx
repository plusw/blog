import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ArticleList from "./ArticleList.jsx"
import Article from "./Article.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ArticleList /> */}
    <Article />
  </React.StrictMode>,
)
