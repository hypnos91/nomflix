import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi } from "../../api";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: true,
    error: null
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);

      this.setState({ movieResults, tvResults });

      this.setState({ loading: true });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        searchTerm={searchTerm}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
