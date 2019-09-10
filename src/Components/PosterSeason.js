import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  margin-right: 10px;
`;

const Image = styled.img`
  margin: 0;
  border-radius: 2px;
  position: relative;
  max-width: 100%;
  height: 150px;
  transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
  max-width: 100%;
  height: 150px;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(1.08);
  }
`;

const Desc = styled.div`
  margin-top: 1rem;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
`;

const Poster = ({ id, imageUrl, title, year }) => (
  // <Link to={`/show/${id}`}>
  <Container>
    <ImageContainer>
      <Image
        src={
          imageUrl
            ? `https://image.tmdb.org/t/p/w200${imageUrl}`
            : require("../assets/noPosterSmall.png")
        }
      />
    </ImageContainer>
    <Desc>
      <Title>
        {title.length > 18 ? `${title.substring(0, 15)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Desc>
  </Container>
  // </Link>
);

Poster.poropTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
