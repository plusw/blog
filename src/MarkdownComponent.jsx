import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownComponent = (props) => {
    const { source, type } = props;
    const renderers = {
        code: ({ language, value }) => {
            return <code className={`language-${language}`}>{value}</code>;
        },
    };
    const plugins = [remarkGfm];
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
                    <ReactMarkdown>
                        plugins={plugins}
                        renderers={renderers}
                        {result}
                    </ReactMarkdown>
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
                <ReactMarkdown>
                    plugins={plugins}
                    renderers={renderers}
                    {source}
                </ReactMarkdown>
            </div>
        );
    }
};

export default MarkdownComponent;