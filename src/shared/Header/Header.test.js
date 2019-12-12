import React from 'react'
import { render } from 'enzyme'

import Header from './Header'

it('Header should render', () => {
  const component = render(<Header />);
  expect(component).toMatchSnapshot();
})

it('Should display the correct message', () => {
  const component = render(<Header />)
  expect(component.text()).toEqual('Movie List App')
})