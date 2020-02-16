import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function ContactInfo(props) {
  return (
    <Content>
      <Text>
        <b>Twitter:</b>@Nicoandresr
      </Text>
      <Text right>
        Bogota, Colombia
      </Text>
      <Text>
        <b>LinkedIn:</b>www.linkedin.com/in/nicoandresr
      </Text>
      <Text right>
        (57) 316 315 88 07
      </Text>
      <Text>
        <b>Github:</b>https://github.com/nicoandresr
      </Text>
      <Text right>
        nicoandres.rodriguez@gmail.com
      </Text>
    </Content>
  );
}

const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Text = styled.span`
  align-items: center;
  display: flex;
  font-size: 16px;
  line-height: 2;
  justify-content: flex-${props => props.right ? 'end' : 'start'};
  min-width: 398px;

  @media(max-width: 800px) {
    flex-direction: column;
  }

  b {
    color: #999;
    font-size: 18px;
    margin-right: 8px;
  }
`;

export default ContactInfo;
