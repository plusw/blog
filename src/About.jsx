import React, { useState, useEffect } from 'react';
import Header from './Header';
import "./About.css"

const About = () => {
    const [pageTitle, setPageTitle] = useState('Blog Title');

    useEffect(() => {
        setPageTitle('About me');
    }, []);

    return (
        <>
            <Header title="About me" backgroundImage="https://plusw.github.io/blog/#/public/source/img/hx.jpg" />
            <br />
            <br />
            <br />
            <br />
            <div className='container'>
                <div className="about">
                    <p><i>
                        hello, 我是一名自由的程序员，想在技术的道路渐行渐远。<br />
                        目前坐标深圳，未来想去海外。<br />
                        这个web主要是想分享一些个人随笔, 欢迎和我一起讨论技术问题。<br />
                        联系方式 telegram: @plusw_hongkong    <br />
                    </i></p>
                </div>
            </div>
            <script>
                const h1=document.querySelector("h1.blog_title")
                h1.text="About me"
            </script>
        </>

    );
};

export default About;
