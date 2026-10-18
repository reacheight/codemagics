import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header/Header';

const LayoutWrapper = styled.div``;

export const Layout = ({ children, isLanding }) => {
  return (
    <LayoutWrapper>
      <Header isLanding={isLanding} />
      {children}
    </LayoutWrapper>
  );
};
