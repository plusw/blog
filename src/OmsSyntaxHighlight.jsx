import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, coyWithoutShadows, darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const them = {
    dark: vscDarkPlus,
    light: coyWithoutShadows
};

const OmsSyntaxHighlight = (props) => {
    const { textContent, darkMode, language = 'txt' } = props;

    if (typeof darkMode === 'undefined') {
        them.light = darcula;
    }

    if (typeof darkMode === 'boolean') {
        them.light = coyWithoutShadows;
    }

    return (
        <SyntaxHighlighter
            showLineNumbers={true} // 是否展示左侧行数
            lineNumberStyle={{ color: '#ddd', fontSize: 10 }} // 左侧行数的样式
            style={darkMode ? them.dark : them.light}  // 主题风格
            language={language}  // 需要语言类型 如css, jsx , javascript 等
            PreTag='div'
        >
            {String(textContent).replace(/\n$/, '')}
        </SyntaxHighlighter>
    );
};

export default OmsSyntaxHighlight;
