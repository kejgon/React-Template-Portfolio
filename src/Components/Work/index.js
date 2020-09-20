// jshint esversion:6
import React, { Component } from 'react';
import axios from 'axios';
import { WorkSection, WorkTitle, Span, Part, PartIcon, PartTitle, PartLine, PartDesc } from './style.js';


class Work extends Component {

    state = {
        works: []
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState(
                { works: res.data.works }
            );
        });

    }


    render() {

        const { works } = this.state;
        const workList = works.map(work => {
            return (
                <Part first={work.id} key={work.id}>
                    <PartIcon className={work.icon_name}></PartIcon>
                    <PartTitle>{work.title}</PartTitle>
                    <PartLine />
                    <PartDesc>{work.body}</PartDesc>
                </Part>

            )
        }
        )



        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {workList}

                </div>
            </WorkSection>
        );
    }
}
export default Work;
