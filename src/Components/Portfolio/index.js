// jshint esversion:6
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, BoxWrapper, Image, Overly, OverlySpan } from './style';

const Portfolio = () => {



    const [images, setImages] = useState([]);


    useEffect(() => {

        axios.get('js/data.json').then(res => {
            setImages(res.data.portfolio);
        });


    }, []);

    const PortfolioImages = images.map((imageItem) => {

        return (
            <BoxWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt="" />
                <Overly>
                    <OverlySpan>
                        Show Image
                    </OverlySpan>
                </Overly>
            </BoxWrapper>


        )


    });




    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            {/* <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList> */}

            <div className="box">

                {PortfolioImages}

            </div>

        </PortfolioSection>
    );
}

export default Portfolio;
