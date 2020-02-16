import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import Home from './pages/home';

function App() {
  return (
    <Home />
  );
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
