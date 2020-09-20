// jshint esversion:6
import React from 'react';
import { AboutSection, AboutTitle, AboutInfo, Span, InfoDir, InfoDesc, InfoAnchor } from './style';

const About = () => {
    return (
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <AboutTitle><Span>This is Me</Span></AboutTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoAnchor href="#">explicabo</InfoAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    );
}

export default About;
