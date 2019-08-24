import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import ColoredScrollbars from "../../Components/ColoredScrollbars";
import { BackIcon } from "../../Components/Icons";

const Container = styled.div`
  overflow-y: hidden;
  height: 100vh;
  width: 100%;
  padding: 50px;
  @media (max-width: 500px) {
    padding: 20px;
    padding-top: 50px;
  }

  @media (max-width: 400px) {
    padding: 0px;
    padding-top: 50px;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -2;
`;

const Cover = styled.div`
  position: absolute;
  left: 0;
  top: 10rem;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 12rem;
  max-height: 30rem;
  height: 100%;
  border-radius: 5px;
  opacity: 1;
  z-index: -1;
  @media (max-width: 1300px) {
    background-position: left center;
    left: 20vw;
  }

  @media (max-width: 1000px) {
    background-position: center center;
    left: 0;
  }
`;

const Data = styled.div`
  position: absolute;
  right: 10vw;
  width: 30%;
  background-color: rgba(20, 20, 20, 1);
  @media (max-width: 1300px) {
    top: 23vw;
    width: 40%;
  }

  @media (max-width: 1000px) {
    top: 90vh;
    width: 80%;
    height: auto;
  }

  @media (max-width: 400px) {
    width: 90%;
    left: 20px;
  }
`;

const Title = styled.div`
  width: 400px;
  font-size: 5vw;
  font-weight: 800;
  margin-bottom: 20px;
  word-break: keep-all;
  @media (max-width: 1000px) {
    margin-top: 40px;
    margin-bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ItemContainer = styled.div`
  margin: 20px 20px 20px;
`;

const Item = styled.span``;

const BackIconContainer = styled.div`
  fill: white;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  word-break: keep-all;
  margin: 20px;
  font-size: 2rem;
  opacity: 0.7;
  line-height: 1.3;
  width: 92%;
  height: 200px;
  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

// const LinkContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 20px;
// `;

// const ItemYoutube = styled.div`
//   & svg {
//     fill: white;
//     &:hover {
//       fill: red;
//     }
//   }
// `;

const Imdb = styled.a`
  margin-left: 10px;
  display: inline-block;
  position: relative;
  top: 6px;
  width: 40px;
  height: 20px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
`;

const DetailPresenter = ({ result, loading, error, pathname }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}
          &nbsp;| Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Title>
        {result.original_title ? result.original_title : result.original_name}
      </Title>
      <BackIconContainer>
        <BackIcon />
      </BackIconContainer>
      <Cover
        bgImage={
          result.poster_path
            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
            : require("../../assets/noPosterSmall.png")
        }
      />
      <Data>
        <ItemContainer>
          <Item>
            {result.release_date
              ? result.release_date && result.release_date.substring(0, 4)
              : result.first_air_date && result.first_air_date.substring(0, 4)}
          </Item>
          <Divider>·</Divider>
          <Item>
            {result.runtime ? result.runtime : result.episode_run_time[0]} min
          </Item>
          <Divider>·</Divider>
          <Item>
            {result.genres &&
              result.genres.map((genre, index) =>
                index === result.genres.length - 1
                  ? genre.name
                  : `${genre.name}/`
              )}
          </Item>

          <Imdb
            href={`https://www.imdb.com/title/${result.imdb_id}`}
            target={"_blank"}
            rel={"noopener noreferrer"}
            src={require("../../assets/imdb_logo.png")}
          />
        </ItemContainer>

        <Overview>
          <ColoredScrollbars autoHeight autoHeightMin={100} autoHeightMax={180}>
            {result.overview}
          </ColoredScrollbars>
        </Overview>
      </Data>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
