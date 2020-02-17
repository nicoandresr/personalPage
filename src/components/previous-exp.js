import React from 'react';
import styled from 'styled-components';

import { Heading2 } from 'components/title';
import { previous } from 'data';

function PreviousExperience(props) {
  return previous.map(item => {
    const { company, start, end, city } = item; 
    return (
      <Heading2 key={company}>
        {company}, {start} - {end}, {city}.
      </Heading2>
    );
  });
}

export default PreviousExperience;
