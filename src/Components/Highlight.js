import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  font-size: 12px;
`;

const Image = styled.img`
  width: 100%;
  transition: opacity 0.2s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.2;
    }
    ${Rating} {
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    height: 160px;
  }
`;

const Title = styled.span`
  font-size: 1rem;
  display: block;
  margin-top: 10px;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: black;
`;

const Highlight = ({ id, backdrop, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image src={`https://image.tmdb.org/t/p/original/${backdrop}`} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>
          {""}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 50)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Highlight.protoType = {
  id: PropTypes.number.isRequired,
  backdrop_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Highlight;
