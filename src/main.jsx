import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import ArticleList from './ArticleList.jsx';
import Article from './Article.jsx';
import About from './About';

const App = () => {
  const [articleNameArray, setArticleNameArray] = useState([]);

  const apiGetArticleName = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/repos/plusw/plusw.github.io/contents/blog_/public/article'
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // Now you can work with the JSON data
      const names = data.map(item => item.name);
      setArticleNameArray(names);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    // Call the API function when the component mounts
    apiGetArticleName();
  }, []); // Run once on mount

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/blog"
            element={<ArticleList articleNameArray={articleNameArray} />}
          />
          <Route path="/about/" element={<About />} />
          <Route path="/article/:articleName" element={<Article />} />
          {/* <Route path="/article/" element={<ArticleLoader />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
