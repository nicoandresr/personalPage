import React from 'react';
import styled from 'styled-components';

import { technicalSkills } from 'data';
import { Heading2 } from 'components/title';

function Techskills(props) {
  return technicalSkills.map(item => {
    const { experience, items } = item;
    return (
      <Heading2>({experience}): <span>{items.join(',')}.</span></Heading2>
    );
  });
}

export default Techskills;
