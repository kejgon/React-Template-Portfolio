// jshint esversion:6
import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeSpans, HomeBtn } from './style';

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Kejgon James</HomeTitle>
                    <HomeInfo>Full Stack Developer</HomeInfo>
                    <HomeDesc>
                        Iam a professional <HomeSpans>Web Designer</HomeSpans> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    );
}

export default Home;
