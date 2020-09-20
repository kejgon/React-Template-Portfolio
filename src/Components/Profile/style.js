//jshint esversion:6

import styled from 'styled-components';


////////////////? PROFILE PART ////////////////////

export const ProfileSection = styled.div`
 padding: 50px 0;
    overflow: hidden;

`;

export const Profiles = styled.div`
 width: 50%;
    float: left;
`;

export const ProfileList = styled.ul`
    list-style: none

`;

export const ProfileItem = styled.li`
    margin-bottom: 8px

`;

export const ProfileItemSpan = styled.span`
 display: inline-block;
    width: 100px;
    font-weight: bold
`;


// .profile_skills .profile .profile-list .profile-item span.web {
//     font-weight: normal;
//     color: #eb5424
// }

////////////////? SKILLS PART ////////////////////

export const SkillSection = styled.div`
   width: 50%;
    float: left;
`;

export const SkillDesc = styled.p`
 font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`;

export const SkillBar = styled.div`

overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`;

export const SkillBarTitle = styled.span`
    float: left;

`;
export const SkillBarPerc = styled.span`
 float: right;
    margin-right: 100px
`;

export const SkillBarParent = styled.div`
   height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`;

export const SkillBarParentSpan = styled.span`
   background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`;



// .profile_skills .skills .bar .parent span.sp1 {
//     width: 100%;
// }

// .profile_skills .skills .bar .parent span.sp2 {
//     width: 90%;
// }

// .profile_skills .skills .bar .parent span.sp3 {
//     width: 80%;
// }

// .profile_skills .profile .profile-title,
// .profile_skills .skills .skills-title{
//     font-size: 40px; 
//     margin-bottom: 20px
// }

// .profile_skills .profile .profile-title span,
// .profile_skills .skills .skills-title span{
//     font-weight: normal;
// }

// @media (max-width:768px) {
//     .profile_skills .profile , 
//     .profile_skills .skills {
//         width: 100%;
//         float: none
//     }
//     .profile_skills .profile {
//         margin-bottom: 20px
//     }
// }