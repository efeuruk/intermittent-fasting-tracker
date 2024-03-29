import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  max-width: 530px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
