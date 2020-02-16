import React from 'react';
import styled from 'styled-components';

import ContactInfo from 'components/contact-info';
import Header from 'components/header';
import Heading1 from 'components/title';
import WorkExperience from 'components/work-experience';

function Home() {
  return (
    <Background>
      <Content>
        <Header />

        <ContactInfo />

        <Heading1>work experience</Heading1>

        <WorkExperience />
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
