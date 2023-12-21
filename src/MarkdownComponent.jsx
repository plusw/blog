import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownComponent = (props) => {
    const { source, type } = props;
    // console.log(source)
    if (type == "introduce") {
        const targetString = "正文";
        const indexOfTarget = source.indexOf(targetString);

        let result;

        // 如果找到了目标字符串，就截取之前的部分；否则保持原始字符串
        if (indexOfTarget !== -1) {
            result = source.substring(0, indexOfTarget);
            return (
                <div>
                    <ReactMarkdown>{result}</ReactMarkdown>
                </div>
            );
        } else {
            return (
                <div>
                    <ReactMarkdown>{source}</ReactMarkdown>
                </div>
            );
        }
    } else if (type == "article") {
        return (
            <div>
                <ReactMarkdown>{source}</ReactMarkdown>
            </div>
        );
    }
};

export default MarkdownComponent;