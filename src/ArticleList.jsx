import React, { useState, useEffect } from 'react';
import MarkdownComponent from './MarkdownComponent';
import Header from "./Header.jsx"
import "./ArticleList.css"


function ArticleList() {
    const [markdownFiles, setMarkdownFiles] = useState(['demo01scrapyYoutube.markdown', '2015.markdown']);
    const [markdownContents, setMarkdownContents] = useState([]);

    useEffect(() => {
        // Fetch Markdown content for each file
        const fetchMarkdownContent = async () => {
            const contentPromises = markdownFiles.map(async (fileName) => {
                // const response2 = await fetch(`https://plusw.github.io/blog/public/article/`);
                // const response2 = await fetch(`/blog/public/article/`);

                const response = await fetch(`https://plusw.github.io/blog/public/article/${fileName}`);
                // const response = await fetch(`/blog/public/article/${fileName}`);
                const data = await response.text();
                return { fileName, data };
            });

            const contents = await Promise.all(contentPromises);
            setMarkdownContents(contents);
        };

        fetchMarkdownContent();
    }, [markdownFiles]);

    return (
        <>
            <Header />
            <div className='article_container'>
                {markdownContents.map((markdownContent, index) => (
                    <>
                        <div id="articles">
                            <MarkdownComponent key={index} source={markdownContent.data} type={"introduce"} />
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
