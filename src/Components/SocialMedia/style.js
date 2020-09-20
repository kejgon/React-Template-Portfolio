//jshint esversion:6

import styled from 'styled-components';

export const SocialMedia = styled.div`
    height: auto;
    overflow: hidden;
    width:100%;
    margin:0 auto;
`;

export const Social = styled.div`
    width: 33.33%;
    float: left;
    height:auto;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.item === 1 ? '#3b5998' : ''};
    background: ${props => props.item === 2 ? '#498cbf' : ''};
    background: ${props => props.item === 3 ? '#333333' : ''};
`;

export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 27px;
`;

export const SocialDesc = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float:left;
`;

export const Span = styled.span`
    display: block;
    margin-bottom: 8px;
`;

export const SpanInfo = styled.span`
    font-weight: normal;
`;