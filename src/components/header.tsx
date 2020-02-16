import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Content>
      <Name>
        <Gray>Nicolas</Gray> Rodriguez
      </Name>
      <Title>
        Front-End <b>React</b> Dev
      </Title>
    </Content>
  );
}

const Content = styled.section`
  align-items: flex-end;
  border-bottom: 1px solid #939393;
  display: flex;
  height: min-content;
  justify-content: space-between;
  padding-bottom: 8px;
`;

function fontSizeMedia(mobile, desktop) {
  return `
    @media(max-width: 1199px) {
      font-size: ${mobile};
    }
    @media(min-width: 1200px) {
      font-size: ${desktop};
    }
  `;
}

const Name = styled.span`
  color: black;
  height: min-content;
  font-weight: 900;
  text-align: left;
  width: max-content;
  ${fontSizeMedia('5vw', '38px')}
`;

const Gray = styled(Name)`
  color: #999;
`;

const Title = styled.span`
  color: rgb(83,30,321);
  height: min-content;
  width: max-content;
  ${fontSizeMedia('4vw', '36px')}
`;

export default Header;
