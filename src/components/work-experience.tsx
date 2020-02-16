import React from 'react';
import styled from 'styled-components';

import { Heading2 } from 'components/title';

function WorkExperience() {
  return (
    <>
      <Heading2>
        Senior Front End developer,  Globant, Jul 2018 - Current, Bog-Col.
      </Heading2>
      <p>
        IT software development company, it's one of the biggest solution providers in Latam.
      </p>
      <UL>
        <li>
          Member of a south america regional team, working remotely with Scrum methodology.
        </li>
        <li>
          Developed & maintained an on-demand streaming video service “Hallmark Movies Now” from the beginning to production stage and build in Next JS, React, Redux, Epics, Sagas, Redux Forms, Formik, Normalizr, Reselect, Axios, Jest, Enzyme and lastly in React Hooks.
        </li>
        <li>
          Reduced application’s size by 40% less, using bundler analyzer and lazy loading modules strategy.
        </li>
        <li>
          Created the complete sign-up path integrated with 3 party payment provider “Vindicia”.
        </li>
        <li>
          Introduced React Hooks in the project with improvements in code reusing.
        </li>
      </UL>
    </>
  );
}

const UL = styled.ul`
  list-style: none;
  padding-left: 2rem;

  li {
    line-height: 1.5;
    position: relative;
  }

  & li:before {
    content: "\\2022";
    color: rgb(83,30,321);
    font-weight: bold;
    display: inline-block;
    left: -2rem;
    position: absolute;
    width: 1em;
  }
`;

export default WorkExperience;
