import React from 'react';
import styled from 'styled-components';

import { languages } from 'data';
import { Heading2 } from 'components/title';

function Languages() {
  return languages.map(item => {
    const { language, proficient } = item;
    return (
      <Heading2>{language}: <span>{proficient}.</span></Heading2>
    );
  });
}

export default Languages;
