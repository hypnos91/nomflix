import React from "react";
import styled, { keyframes } from "styled-components";

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: white;
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -10vmin;
  margin-top: -10vmin;
  height: 20vmin;
  width: 20vmin;
  border-radius: 50%;
  border: 1vmin solid #ec283f;
  border-top-color: pink;
  animation: ${Spin} 2s infinite linear;
`;

export default () => (
  <Container>
    <Loader></Loader>
  </Container>
);
