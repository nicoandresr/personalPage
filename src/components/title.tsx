import React from 'react';
import styled from 'styled-components';

const Heading1 = styled.h1`
  color: #999;
  display: block;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 2rem;

  & span {
    font-weight: 400;
    text-transform: capitalize;
    margin-left: 8px;
  }
`;

export const Heading2 = styled.h2`
  color: #000;
  font-size: 16px;
  font-weight: 700;

  & span {
    color: #999;
    font-weight: 400;
    margin-left: 8px;
  }
`;

export default Heading1;
