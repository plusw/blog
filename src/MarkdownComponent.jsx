import React from 'react';
import ReactMarkdown from 'react-markdown';
import OmsSyntaxHighlight from './OmsSyntaxHighlight';

const MarkdownComponent = (props) => {
    const { source } = props;
    // 自定义渲染器，用于匹配```代码块并使用OmsSyntaxHighlight渲染
    const components = {
        code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <OmsSyntaxHighlight textContent={String(children).replace(/\n$/, '')} language={match[1]} darkMode={true} />
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
    };
    return (
        <div>
            <ReactMarkdown components={components}>
                {source}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownComponent;