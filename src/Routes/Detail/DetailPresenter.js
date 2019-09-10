import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import PosterSeason from "../../Components/PosterSeason";
import { BackIcon } from "../../Components/Icons";
import { Icon } from "react-icons-kit";
import { time } from "react-icons-kit/ikons/time";
import { globe } from "react-icons-kit/ikons/globe";
import { calendar } from "react-icons-kit/ikons/calendar";
import { Scrollbars } from "react-custom-scrollbars";
import { star } from "react-icons-kit/ikons/star";
import { play } from "react-icons-kit/ikons/play";

const Container = styled.div`
  display: grid;
  grid-template-columns: 40vw 250px 1fr;
  grid-template-rows: 45vh 45vh 10vh;
  color: black;
  @media (max-width: 1100px) {
    grid-template-columns: 30vw 70vw;
    grid-template-rows: 30vh 60vh min-content min-content;
  }

  @media (max-width: 450px) {
    grid-template-rows: 30vh 80vh min-content min-content;
  }
`;

const Backdrop = styled.div`
  grid-column: 2/-1;
  grid-row: 1/-1;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  opacity: 1;
  filter: brightness(50%);
  z-index: -2;
  @media (max-width: 1100px) {
    grid-column: 1/3;
    grid-row: 1;
  }
`;

const Data = styled.div`
  grid-column: 1;
  grid-row: 1/-1;
  padding: 50px;
  background-color: white;
  @media (max-width: 1100px) {
    grid-column: 2;
    grid-row: 2;
    padding: 0;
    padding-top: 1rem;
  }
`;

const Cover = styled.img`
  grid-column: 2;
  grid-row: 1;
  width: 150px;
  align-self: center;
  margin-left: 50px;
  box-shadow: 0px 6px 8px 2px rgba(0, 0, 0, 0.5);
  @media (max-width: 1100px) {
    grid-row: 1/3;
    grid-column: 1;
    margin-left: 0px;
    width: 200px;
    justify-self: center;
    position: relative;
    top: -6rem;
  }
  @media (max-width: 820px) {
    max-width: 150px;
  }
  @media (max-width: 600px) {
    top: -10rem;
    max-width: 100px;
  }
  @media (max-width: 400px) {
    top: -10rem;
    max-width: 80px;
  }
`;

const Title = styled.div`
  margin-top: 5rem;
  width: 400px;
  font-size: 4vw;
  font-weight: 800;
  margin-bottom: 2rem;
  word-break: keep-all;
  @media (max-width: 1100px) {
    margin-top: 0;
    width: auto;
  }
  @media (max-width: 820px) {
    margin-bottom: 1rem;
  }
`;

const Item = styled.span``;

const BackIconContainer = styled.div`
  display: none;
  fill: white;
`;

const Overview = styled.div`
  word-break: keep-all;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 1.8;
  @media (max-width: 1100px) {
    max-width: 80%;
  }
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 70px 90px 90px 1fr;
  grid-template-rows: repeat(4, 30px);
  margin-bottom: 2rem;
  font-size: 14px;

  @media (max-width: 450px) {
    grid-template-columns: 70px 85px 90px;
    grid-template-rows: repeat(auto-fit, 30px);
  }
`;
const CountryBox = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const CountryIcon = styled.div`
  grid-column: 1/-1;
  grid-row: 2;
  display: flex;
`;

const Country = styled.div`
  margin-right: 1rem;
  padding-bottom: 0.5rem;
`;

const IconBox = styled.span`
  position: relative;
  top: -1px;
  color: #999;
  margin-right: 5px;
`;

const StarIconBox = styled.span`
  position: relative;
  top: -3px;
  color: #ffbf07;
  margin-right: 5px;
`;

const PlayIconBox = styled.span`
  position: relative;
  top: -1px;
  margin-right: 5px;
`;

const ImdbBox = styled.div`
  @media (max-width: 450px) {
    grid-row: 3;
    margin: 10px 0;
  }
`;

const Imdb = styled.a`
  display: inline-block;
  width: 40px;
  height: 20px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 1000px) {
  }
`;

const GenreBox = styled.div`
  grid-column: 1 / -1;
  grid-row: 3;
  margin-bottom: 1.5rem;
  @media (max-width: 820px) {
    margin-bottom: 0;
  }
  @media (max-width: 450px) {
    grid-row: 4;
  }
`;
const GenreBG = styled.div`
  padding: 10px 10px 7px 0;
  display: inline-block;
`;
const Genre = styled.span`
  font-size: 14px;
  font-weight: 700;
  padding: 5px 10px;
  background: pink;
  color: #ec283f;
  border-radius: 20px;
  width: auto;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

const Rate = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #ffbf07;
`;

const WatchTrailerBox = styled.div`
  grid-column: 3;
  grid-row: 1;
  align-self: center;
  @media (max-width: 1100px) {
    grid-column: 2;
    align-self: end;
    position: relative;
    bottom: 1rem;
  }
`;

const WatchTrailer = styled.div`
  width: 180px;
  padding: 10px 10px;
  color: white;
  border: 1px solid white;
  transition: all 0.4s ease;
  :hover {
    transition: all 0.4s ease;
    color: black;
    background: white;
    overflow: hidden;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 7px 5px 5px 5px;
    width: 130px;
  }
`;

const ProductionBox = styled.div`
  padding-left: 50px;
  background-color: white;
  opacity: 0.8;
  grid-column: 2/-1;
  grid-row: 3;
  display: flex;
  align-items: center;
  font-size: 10px;
  @media (max-width: 1100px) {
    margin: 1rem 0;
    grid-row: 4;
    grid-column: 1/-1;
  }
`;

const ProductionCompanies = styled.ul``;

const Production = styled.div`
  display: inline-block;
  margin-right: 50px;
`;

const ProductionLogo = styled.img`
  max-width: 100px;
  max-height: 4vh;
`;

const Seasons = styled.div`
  margin-top: 1rem;
  color: white;
`;
const Season = styled.div`
  display: inline-block;
`;

const Slider = styled.div`
  grid-column: 2/-1;
  grid-row: 2;
  max-width: 100%;
  padding: 10px 0;
  z-index: 1;
  position: relative;
  height: 150px;

  @media (max-width: 1100px) {
    grid-row: 3;
    grid-column: 1/-1;
    background-color: black;
    height: 250px;
  }
`;

const SliderMask = styled.div`
  white-space: nowrap;
  padding: 0 50px;
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
      <Data>
        <Title>
          {result.original_title ? result.original_title : result.original_name}
        </Title>

        <BackIconContainer>
          <BackIcon />
        </BackIconContainer>
        <ItemContainer>
          <Item>
            <IconBox>
              <Icon icon={calendar} size={"16"} />
            </IconBox>
            {result.release_date
              ? result.release_date && result.release_date.substring(0, 4)
              : result.first_air_date && result.first_air_date.substring(0, 4)}
          </Item>
          <Item>
            <IconBox>
              <Icon icon={time} size={"16"} />
            </IconBox>
            {result.runtime ? result.runtime : result.episode_run_time[0]} min
          </Item>
          <CountryIcon>
            <IconBox>
              <Icon icon={globe} size={"16"} />
            </IconBox>
            <CountryBox>
              {result.production_countries
                ? result.production_countries &&
                  result.production_countries.length > 0 &&
                  result.production_countries.map((country, index) =>
                    index === result.production_countries.length ? (
                      country.name
                    ) : (
                      <Country>{country.name}</Country>
                    )
                  )
                : result.origin_country}
            </CountryBox>
          </CountryIcon>
          <Rate>
            <StarIconBox>
              <Icon icon={star} size={"16"} />
            </StarIconBox>
            {result.vote_average}/10
          </Rate>
          <ImdbBox>
            <Imdb
              href={`https://www.imdb.com/title/${result.imdb_id}`}
              target={"_blank"}
              rel={"noopener noreferrer"}
              src={require("../../assets/imdb_logo.png")}
            />
          </ImdbBox>
          <GenreBox>
            {result.genres &&
              result.genres.map((genre, index) =>
                index === result.genres.length ? (
                  genre.name
                ) : (
                  <GenreBG>
                    <Genre>{genre.name}</Genre>
                  </GenreBG>
                )
              )}
          </GenreBox>
        </ItemContainer>
        <Scrollbars style={{ height: 200 }}>
          <Overview>{result.overview}</Overview>
        </Scrollbars>
      </Data>
      <Cover
        src={
          result.poster_path
            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
            : require("../../assets/noPosterSmall.png")
        }
      />
      <WatchTrailerBox>
        <Link to={`${pathname}/video`}>
          <WatchTrailer>
            <PlayIconBox>
              <Icon icon={play} size={"16"} />
            </PlayIconBox>
            Watch The Trailer
          </WatchTrailer>
        </Link>
      </WatchTrailerBox>
      <ProductionBox>
        {result.production_companies && result.production_companies.length > 0 && (
          <ProductionCompanies>
            {result.production_companies.map(company => (
              <Production>
                {company.logo_path ? (
                  <ProductionLogo
                    src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                    alt={company.name}
                    title={company.name}
                  />
                ) : (
                  company.name
                )}
              </Production>
            ))}
          </ProductionCompanies>
        )}
      </ProductionBox>
      {result.seasons
        ? result.seasons.length > 0 && (
            <Slider>
              <Scrollbars style={{ height: 250 }}>
                <SliderMask>
                  {result.seasons && result.seasons.length > 0 && (
                    <Seasons>
                      {result.seasons.map(s => (
                        <Season>
                          <PosterSeason
                            id={s.id}
                            imageUrl={s.poster_path}
                            title={s.name}
                            year={
                              s.air_date
                                ? s.air_date.substring(0, 4)
                                : "Unknown"
                            }
                          />
                        </Season>
                      ))}
                    </Seasons>
                  )}
                </SliderMask>
              </Scrollbars>
            </Slider>
          )
        : null}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
