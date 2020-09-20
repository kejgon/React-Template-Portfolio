//jshint esversion:6

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarSection = styled.div`
padding: 5px 0;
overflow: hidden;
background:#0a192f;
position: relative;
box-shadow: 2px 3px 4px rgba(0,0,0,0.26);
`;

export const Logo = styled.div`
    width: 50%;
    float: left;
    @media (max-width : 991px){
        width: 100%;
        float: none;

    }
`;

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
    width:12%;
    &:hover{
        border:1px solid #333;


    }
    @media (max-width : 991px){
        width: 12%;

    }

`;


export const UlList = styled.ul`

    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
    @media (max-width : 991px){
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none
    }

`;

export const ListsItems = styled.li`
    display: inline-block;
    @media (max-width : 991px){
        display: block;
        text-align: center;
    }
`;

export const Anchor = styled.a`
    display: block;
    color: #FFF;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
     color: #eb5424
    }
`;




// .navbar.ul - list.list - item a: hover {
//     color: #eb5424
// }

// /* Media for Navbar Style */

// @media(min - width : 992px) {
//     .navbar label {
//         display: none
//     }
// }

// @media(max - width : 991px) {
//     .navbar.logo {
//         width: 100 %;
//         float: none;
//     }

//     .navbar.ul - list {
//         width: 100 %;
//         float: none;
//         margin - top: 20px;
//         display: none
//     }

//     .navbar.ul - list.list - item {
//         display: block;
//         text - align: center;
//     }
// }