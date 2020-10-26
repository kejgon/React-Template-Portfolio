// jshint esversion:6
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileSection, Profiles, ProfileList, ProfileItem, ProfileItemSpan, SkillSection, SkillDesc, SkillBarTitle, SkillBarPerc, SkillBarParentSpan, SkillBarParent, SkillBar } from './style';

const Profile = () => {

    const [profile, setProfile] = useState([]);

    useEffect(() => {

        axios.get('js/data.json').then(res => {
            setProfile(res.data.profile);
        });

    }, []);

    const [skills, setSkills] = useState([]);
    useEffect(() => {

        axios.get('js/data.json').then(res => {
            setSkills(res.data.profile);
        });

    }, []);

    const ProfileDetails = profile.map((prof) => {

        return (

            <ProfileList key={prof.id}>
                <ProfileItem>
                    <ProfileItemSpan>Name </ProfileItemSpan>
                    {prof.name}
                </ProfileItem>
                <ProfileItem>
                    <ProfileItemSpan>Email </ProfileItemSpan>
                    {prof.email}
                </ProfileItem>
                <ProfileItem>
                    <ProfileItemSpan>Address </ProfileItemSpan>
                    {prof.Address}
                </ProfileItem>
                <ProfileItem>
                    <ProfileItemSpan>Website </ProfileItemSpan>
                    {prof.website}
                </ProfileItem>
            </ProfileList>
        )
    })


    const ProfileSkills = skills.map((skill) => {
        const allSkills = skill.skills;

        return (
            allSkills.map(sk => {
                return (
                    <SkillBar key={sk.id}>
                        <SkillBarTitle>{sk.name}</SkillBarTitle>
                        <SkillBarPerc>{sk.percentage}</SkillBarPerc>
                        <SkillBarParent>
                            <SkillBarParentSpan></SkillBarParentSpan>
                        </SkillBarParent>
                    </SkillBar>
                )

            })
        )

    })





    return (
        <ProfileSection>
            <div className="container">
                <Profiles>
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    {ProfileDetails}
                </Profiles>

                <SkillSection>
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <SkillDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillDesc>
                    {ProfileSkills}


                </SkillSection>

            </div>
        </ProfileSection>
    );
}

export default Profile;
