import React, { Component, Fragment } from 'react'
import { Row, Col, Input, Button } from 'antd'
import axios from 'axios'

import Settings from '../../config'
import { ResultList } from './ResultList/ResultList'
import MovieList from './MovieList/MovieList'

export class Home extends Component {
  state = {
    searchTerm: '',
    results: [],
    isLoading: false,
    savedMovies: [],
  }

  componentDidMount() {
    const savedMovies = localStorage.getItem('savedMovies')
    if (savedMovies) {
      this.setState({
        savedMovies: JSON.parse(savedMovies),
      })
    }
  }

  handleSearchChange = event => {
    const { value } = event.target
    if (value.length === 0) {
      this.setState({ results: [] })
    }
    this.setState({
      searchTerm: value,
    })
  }

  handleSearchClick = event => {
    event.preventDefault()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${Settings.APIKEY}&query=${this.state.searchTerm}`
    this.setState({ isLoading: true })
    axios.get(url).then(response => {
      this.setState({
        results: response.data.results,
        isLoading: false,
      })
    })
  }

  handleAddMovie = movie => {
    const { savedMovies } = this.state
    savedMovies.push(movie)
    this.setState({
      savedMovies: savedMovies,
      results: []
    }, () => {
      localStorage.setItem('savedMovies', JSON.stringify(this.state.savedMovies))
    })
  }

  handeDelete = movie => {
    const { savedMovies } = this.state;
    const movies = savedMovies.filter(item => item.id !== movie.id);

    this.setState({
      savedMovies: movies
    }, () => {
      localStorage.setItem('savedMovies', JSON.stringify(this.state.savedMovies))
    })
  }

  render = () => {
    const { searchTerm, isLoading } = this.state

    return (
      <Fragment>
        <Row>
          <form onSubmit={this.handleSearchClick}>
            <Col span={8} offset={6}>
              <Input
                placeholder="Search for a movie"
                value={searchTerm}
                onChange={this.handleSearchChange}
                onPressEnter={this.handleSearchChange}
                allowClear
              />
            </Col>
            <Col span={2}>
              <Button
                type="primary"
                icon="search"
                disabled={searchTerm.length < 2}
                loading={isLoading}
                onClick={this.handleSearchClick}>
                Search
              </Button>
            </Col>
          </form>
        </Row>
        <Row>
          <Col span={10} offset={6}>
            <ResultList
              results={this.state.results}
              savedMovies={this.state.savedMovies}
              onAddMovie={this.handleAddMovie}
            />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2} className="movie_list">
            {this.state.savedMovies.length > 0 && (
              <MovieList
                movies={this.state.savedMovies}
                handleDelete={this.handeDelete}
              />
            )}
          </Col>
        </Row>
      </Fragment>
    )
  }
}
