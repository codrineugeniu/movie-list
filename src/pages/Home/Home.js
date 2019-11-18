import React, { Component, Fragment } from 'react'
import { Row, Col, Input, Button } from 'antd'
import axios from 'axios'

import Settings from '../../config'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w200/'

const ResultList = props => {
  const { results } = props
  return results.map(item => {
    return (
      <Row key={item.id} gutter={8} className="result_item">
        <Col span={4} className="result_poster">
          <img
            alt={`Poster of ${item.title}`}
            src={IMAGE_PATH + item.poster_path}
          />
        </Col>
        <Col span={12}>
          <span>{item.title}</span>
        </Col>
        <Col span={4}>
          <span>{item.vote_average}</span>
        </Col>
        <Col span={4}>
          <span>{item.release_date}</span>
        </Col>
      </Row>
    )
  })
}

export class Home extends Component {
  state = {
    searchTerm: '',
    results: [],
    isLoading: false,
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
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${Settings.APIKEY}&query=${this.state.searchTerm}`
    this.setState({ isLoading: true })
    axios.get(url).then(response => {
      this.setState({
        results: response.data.results,
        isLoading: false,
      })
    })
  }

  render = () => {
    const { searchTerm, isLoading } = this.state
    return (
      <Fragment>
        <Row>
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
        </Row>
        <Row>
          <Col span={10} offset={6}>
            <ResultList results={this.state.results} />
          </Col>
        </Row>
      </Fragment>
    )
  }
}
