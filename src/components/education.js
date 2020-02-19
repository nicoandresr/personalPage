import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { education } from 'data';
import { Heading2 } from 'components/title';

function Education() {
  return education.map(item => {
    const { title, institute, city, start, end } = item;
    return (
      <>
        <Heading2>{title}, {institute} - {city}.</Heading2>
        <span>{start} - {end}.</span>
      </>
    );
  });
}

export default Education;
