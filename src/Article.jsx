import React, { useState, useEffect } from 'react';
import MarkdownComponent from './MarkdownComponent';
import { useParams } from 'react-router-dom';
import Header from './Header';
import "./Article.css"

function Article() {
    const [markdownContent, setMarkdownContent] = useState('');
    const { articleName } = useParams();
    useEffect(() => {
        // Fetch your Markdown content
        fetch('https://plusw.github.io/blog_/public/article/' + articleName + ".markdown")
            // fetch('/blog/public/article/demo01scrapyYoutube.markdown')
            .then((response) => response.text())
            .then((data) => setMarkdownContent(data));
    }, []);

    return (
        <>
            <Header title={articleName} backgroundImage="https://plusw.github.io/blog_/public/source/img/header_bear2.jpg" />
            <div id="container">

                {markdownContent && (
                    <div className='article'>
                        <MarkdownComponent source={markdownContent} type={"article"} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Article