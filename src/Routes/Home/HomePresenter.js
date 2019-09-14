import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import SectionBig from "../../Components/SectionBig";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Highlight from "../../Components/Highlight";

const Container = styled.div`
  padding-top: 80px;
  margin: 0 50px;
  @media (max-width: 820px) {
    margin: 0 20px;
  }
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Movies | Nomflix</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
          <SectionBig title="Now Playing">
            {nowPlaying.slice(0, 3).map(movie => (
              <Highlight
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                backdrop={movie.backdrop_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </SectionBig>
        )}

        {nowPlaying && nowPlaying.length > 0 && (
          <Section>
            {nowPlaying.slice(4, -1).map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}

        {popular && popular.length > 0 && (
          <SectionBig title="Popular">
            {popular.slice(0, 3).map(movie => (
              <Highlight
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                backdrop={movie.backdrop_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </SectionBig>
        )}

        {popular && popular.length > 0 && (
          <Section>
            {popular.slice(4, -1).map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}

        {upcoming && upcoming.length > 0 && (
          <SectionBig title="Upcoming">
            {upcoming.slice(0, 3).map(movie => (
              <Highlight
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                backdrop={movie.backdrop_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </SectionBig>
        )}

        {upcoming && upcoming.length > 0 && (
          <Section>
            {upcoming.slice(4, -1).map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}

        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};
export default HomePresenter;
