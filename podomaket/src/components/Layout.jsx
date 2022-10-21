import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <LayOut>{props.children}</LayOut>;
};

export const LayOut = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export default Layout;
