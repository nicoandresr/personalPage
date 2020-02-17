import React from 'react';
import styled from 'styled-components';

import { Heading2 } from 'components/title';
import { sideProjects } from 'data';

function SideProjects(props) {
  return sideProjects.map(item => {
    const { name, description } = item;
    return (
      <Heading2 key={name}>
        {name}: <span>{description}</span>
      </Heading2>
    );
  });
}

export default SideProjects;
