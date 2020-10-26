// jshint esversion:6
import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSection, Logo, LogoText, UlList, ListsItems, Anchor } from './style.js';






const Navbar = () => {
    return (
        <NavbarSection>

            <div className="container">

                <Logo>
                    <LogoText><Anchor href="/">KJ</Anchor></LogoText>
                </Logo>

                <UlList>
                    <ListsItems><Link className="anchor" to="/">Home</Link></ListsItems>
                    <ListsItems><Anchor href="#work">Work</Anchor></ListsItems>
                    <ListsItems><Anchor href="#portfolio">Portfolio</Anchor></ListsItems>
                    <ListsItems><Anchor href="">Resume</Anchor></ListsItems>
                    <ListsItems><Anchor href="#about">About</Anchor></ListsItems>
                    <ListsItems><Link to="/contact">Contact</Link></ListsItems>
                </UlList>



            </div>

        </NavbarSection>
    );
}

export default Navbar;
