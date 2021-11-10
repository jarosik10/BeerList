import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const MainWrapper: FunctionComponent = ({ children }) => {
  return <Wrapper>
    {children}
  </Wrapper>
}

export default MainWrapper;
