import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'

export class Home extends Component {
  state = {
    searchTerm: '',
  }

  handleSearchChange = event => {
    const {
      target: { value },
    } = event
    this.setState({
      searchTerm: value,
    })
  }

  handleSearchClick = () => {
    console.log(this.state.searchTerm)
  }

  render = () => {
    return (
      <Row>
        <Col span={8} offset={6}>
          <Input
            placeholder="Search for a movie"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
          />
        </Col>
        <Col span={2}>
          <Button
            type="primary"
            icon="search"
            onClick={this.handleSearchClick}
          >
            Search
          </Button>
        </Col>
      </Row>
    )
  }
}
