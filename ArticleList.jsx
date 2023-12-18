import React, { useState, useEffect } from 'react';
import MarkdownComponent from './MarkdownComponent';
import "./ArticleList.css"

function ArticleList() {
    const [markdownFiles, setMarkdownFiles] = useState(['2014-01-29-hello-2015.markdown', '2015.markdown']);
    const [markdownContents, setMarkdownContents] = useState([]);

    useEffect(() => {
        // Fetch Markdown content for each file
        const fetchMarkdownContent = async () => {
            const contentPromises = markdownFiles.map(async (fileName) => {
                const response2 = await fetch(`/plusw.github.io/public/article/`);
                console.log(response2)
                const response = await fetch(`/plusw.github.io/public/article/${fileName}`);
                const data = await response.text();
                return { fileName, data };
            });

            const contents = await Promise.all(contentPromises);
            setMarkdownContents(contents);
        };

        fetchMarkdownContent();
    }, [markdownFiles]);

    return (
        <div className='article_container'>
            {markdownContents.map((markdownContent, index) => (
                <>
                    <div id="articles">
                        <MarkdownComponent key={index} source={markdownContent.data} type={"article"} />
                    </div>
                    <br />
                    <br />
                    <br />
                </>
            ))}
        </div >
    );
}

export default ArticleList;