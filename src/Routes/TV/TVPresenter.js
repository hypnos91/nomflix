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

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV Shows | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <SectionBig title="Top Rated Shows">
            {topRated.slice(0, 3).map(show => (
              <Highlight
                key={show.id}
                id={show.id}
                backdrop={show.backdrop_path}
                title={show.original_name}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </SectionBig>
        )}

        {topRated && topRated.length > 0 && (
          <Section>
            {topRated.slice(4, -1).map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </Section>
        )}

        {popular && popular.length > 0 && (
          <SectionBig title="Popular Shows">
            {popular.slice(0, 3).map(show => (
              <Highlight
                key={show.id}
                id={show.id}
                backdrop={show.backdrop_path}
                title={show.original_name}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </SectionBig>
        )}
        {popular && popular.length > 0 && (
          <Section>
            {popular.slice(4, -1).map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </Section>
        )}

        {airingToday && airingToday.length > 0 && (
          <SectionBig title="Airing Today">
            {airingToday.slice(0, 3).map(show => (
              <Highlight
                key={show.id}
                id={show.id}
                backdrop={show.backdrop_path}
                title={show.original_name}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </SectionBig>
        )}

        {airingToday && airingToday.length > 0 && (
          <Section>
            {airingToday.slice(4, -1).map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
