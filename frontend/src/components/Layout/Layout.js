import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header/Header';

const LayoutWrapper = styled.div``;

export const Layout = ({
  children,
  isHeaderTransparent = false,
  isGamePage = false,
}) => {
  return (
    <LayoutWrapper>
      <Header isTransparent={isHeaderTransparent} isLanding={!isGamePage} />
      {children}
    </LayoutWrapper>
  );
};
