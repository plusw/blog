import React, { useState, useEffect } from 'react';
import MarkdownComponent from './MarkdownComponent';

function Article() {
    const [markdownContent, setMarkdownContent] = useState('');
    // console.log(markdownContent2)
    useEffect(() => {
        // Fetch your Markdown content
        fetch('/blog/public/article/demo01scrapyYoutube.markdown')
            .then((response) => response.text())
            .then((data) => setMarkdownContent(data));
    }, []);

    return (
        <div>

            {markdownContent && (
                <MarkdownComponent source={markdownContent} type={"introduce"} />
            )}
        </div>
    );
};

export default Article