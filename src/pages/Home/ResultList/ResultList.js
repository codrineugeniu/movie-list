import React from 'react'
import { Row, Col, Button, Icon } from 'antd'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w200/'

export const ResultList = props => {
  const { results, savedMovies, onAddMovie } = props
  return results.map(item => {
    return (
      <Row key={item.id} gutter={8} className="result_item">
        <Col span={4} className="result_poster">
          <img
            alt={`Poster of ${item.title}`}
            src={IMAGE_PATH + item.poster_path}
          />
        </Col>
        <Col span={10}>
          <span>{item.title}</span>
        </Col>
        <Col span={3}>
          <span>{item.vote_average}</span>
        </Col>
        <Col span={3}>
          <span>{item.release_date}</span>
        </Col>
        <Col span={2} offset={1} className="result_add">
          {savedMovies.some(movie => movie.id === item.id) ? (
            <Button type="secondary" ghost disabled>
              <Icon
                type="check-circle"
                theme="twoTone"
                twoToneColor="#52c41a"
              />
              Saved
            </Button>
          ) : (
            <Button type="primary" ghost onClick={() => onAddMovie(item)}>
              <Icon type="plus" />
              Save
            </Button>
          )}
        </Col>
      </Row>
    )
  })
}
