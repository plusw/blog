import React from 'react';
import OmsSyntaxHighlight from './OmsSyntaxHighlight';

const textContent = 'console.log(1);';

const Demo = () => {
    return <OmsSyntaxHighlight textContent={textContent} language="javascript" darkMode={true} />;
}

export default Demo;
