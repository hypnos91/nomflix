import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_left } from "react-icons-kit/md/ic_keyboard_arrow_left";

const Container = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 90vh 10vh;
  @media (max-width: 1100px) {
    grid-template-rows: min-content 1fr 10vh;
  }
`;
const VideoContainer = styled.div`
  grid-column: 2/-1;
  @media (max-width: 1100px) {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
`;

const VideoListContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  @media (max-width: 1100px) {
    grid-column: 2/-1;
    grid-row: 2;
  }
`;

const Iconbox = styled.div`
  align-self: end;
  color: white;
  grid-column: 1;
  grid-row: 2;
  @media (max-width: 1100px) {
    grid-column: 1;
    grid-row: 2;
    align-self: start;
    margin-top: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 20px;
`;

const VideoPlayer = styled(YouTube)`
  width: 100%;
  height: 100vh;
`;

const Videos = styled.ul`
  margin-top: 3.5rem;
`;

const Video = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  font-size: 14px;
  color: white;
  border-bottom: 1px solid #333333;
  transition: all 0.4s ease;
  &.selected {
    background-color: #aaaaaa;
  }
  &:hover {
    background-color: #333333;
  }
  a {
    width: 100%;
    padding: 0 10px;
  }
`;

const VideoPresenter = ({ result, videoInfo, loading }) => {
  const { error } = videoInfo;
  //   return <>test</>;
  if (loading) {
    return <>loading....</>;
  } else if (error && error.length > 0) {
    return error;
  } else if (result !== null && result.results.length > 0) {
    return renderVideoList(result, videoInfo);
  } else {
    return renderNotFound();
  }
};

const renderNotFound = () => (
  <Container>
    <Title className="center">Video doesn't exist.</Title>
  </Container>
);
const renderVideoList = (result, videoInfo) => {
  const { results: videos } = result;
  const youtubeOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };
  const { videoId, isMovie } = videoInfo;
  const videoLink = isMovie
    ? `/movie/${result.id}/video`
    : `/show/${result.id}/video`;
  return (
    <Container>
      <VideoListContainer>
        <Videos>
          {videos &&
            videos.length > 0 &&
            videos.map(video => {
              return (
                <Video
                  key={video.id}
                  className={video.key === videoId && "selected"}
                >
                  <Link to={`${videoLink}/${video.key}`}>{video.name}</Link>
                </Video>
              );
            })}
        </Videos>
      </VideoListContainer>
      <Iconbox>
        <Link to={`${videoLink.split("/video")[0]}`}>
          <Icon icon={ic_keyboard_arrow_left} size={"60"} />
        </Link>
      </Iconbox>
      <VideoContainer>
        <VideoPlayer videoId={videoInfo.videoId} opts={youtubeOpts} />
      </VideoContainer>
    </Container>
  );
};
VideoPresenter.propTypes = {
  result: PropTypes.object,
  videoInfo: PropTypes.shape({
    videoId: PropTypes.string.isRequired,
    isMovie: PropTypes.bool.isRequired,
    error: PropTypes.string
  })
};
export default VideoPresenter;
