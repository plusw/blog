import React from 'react';
import MarkdownComponent from './MarkdownComponent';

const ArticleLoader = (props) => {
    const { source, type } = props;
    let result = source;
    // console.log(source)
    if (type == "introduce") {
        const targetString = "####";
        const indexOfTarget = source.indexOf(targetString);
        // 如果找到了"正文"，就截取正文之前的部分；否则保持原始
        if (indexOfTarget !== -1) {
            result = source.substring(0, indexOfTarget);
        }
    }
    else if (type == "article") {
        result = source;
    }
    return (
        <MarkdownComponent source={result} />
    );
};

export default ArticleLoader;