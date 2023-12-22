import React, { useState, useEffect } from 'react';
import Header from "./Header.jsx"
import "./ArticleList.css"
import ArticleLoader from './ArticleLoader.jsx';
import Test from './Test.jsx';


function ArticleList({ articleNameArray }) {
    // const [markdownFiles, setMarkdownFiles] = useState(['demo01scrapyYoutube.markdown']);
    const [markdownContents, setMarkdownContents] = useState([]);

    useEffect(() => {
        // Fetch Markdown content for each file
        const fetchMarkdownContent = async () => {
            const contentPromises = articleNameArray.map(async (fileName) => {
                // const response2 = await fetch(`https://plusw.github.io/blog/public/article/`);
                // const response2 = await fetch(`/blog/public/article/`);

                const response = await fetch(`https://plusw.github.io/blog_/public/article/${fileName}`);
                // const response = await fetch(`/blog/public/article/${fileName}`);
                const data = await response.text();
                return { fileName, data };
            });

            const contents = await Promise.all(contentPromises);
            setMarkdownContents(contents);
        };

        fetchMarkdownContent();
    }, [articleNameArray]);

    return (
        <>
            <Header backgroundImage="https://plusw.github.io/blog_/public/source/img/header_witcher3.jpg" />
            <br />
            <br />
            <br />
            <div className='article_container'>
                {markdownContents.map((markdownContent, index) => (
                    <>
                        <div id="articles">
                            <ArticleLoader key={index} source={markdownContent.data} type={"introduce"} />

                        </div>
                        <br />
                        <br />
                        <br />
                    </>
                ))}
            </div >
        </>
    );
}

export default ArticleList;
