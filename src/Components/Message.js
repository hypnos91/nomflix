import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Video = styled.span`
  color: ${props => props.color};
`;

const Message = ({ video }) => (
  <Container>
    <Video>{video}</Video>
  </Container>
);

Message.propTypes = {
  video: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Message;
