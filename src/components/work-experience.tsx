import React from 'react';
import styled from 'styled-components';

import { experience } from 'data';
import { Heading2 } from 'components/title';

function WorkExperience() {
  return experience.map(item => {
    const { title, company, start, end, city, description, achivements } = item;
    return (
      <div key={company}>
        <Heading2>
          {title}, {company}, {start} - {end}, {city}.
        </Heading2>
        <p>
          {description}
        </p>
        <UL>
          {achivements.map(text => (
            <li key={text}>{text}</li>
            )
          )}
        </UL>
      </div>
    );
  });
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
