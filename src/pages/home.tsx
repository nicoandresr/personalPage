import React from 'react';
import styled from 'styled-components';

import ContactInfo from 'components/contact-info';
import Education from 'components/education';
import Header from 'components/header';
import Heading1 from 'components/title';
import Languages from 'components/languages';
import PreviousExperiences from 'components/previous-exp';
import SideProjects from 'components/side-projects';
import TechSkills from 'components/tech-skills';
import WorkExperience from 'components/work-experience';

function Home() {
  return (
    <Background>
      <Content>
        <Header />

        <ContactInfo />

        <Heading1>work experience</Heading1>

        <WorkExperience />

        <Heading1>previous experiences <span>.Net Web Developer</span></Heading1>

        <PreviousExperiences />

        <Heading1>side projects</Heading1>

        <SideProjects />

        <Heading1>education</Heading1>

        <Education />

        <Heading1>technical skills</Heading1>

        <TechSkills />

        <Heading1>languages</Heading1>

        <Languages />
      </Content>
    </Background>
  );
}

const Background = styled.div`
  background-image: #F3F3F3;
  color: #434343;
  width: 100%;
`;

const Content = styled.div`
  font-family: Lato;
  margin: 1rem auto;
  max-width: 800px;
`;

export default Home;
