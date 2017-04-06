import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'

test('Header renders correctly', () => {
  const component = shallow(
    <Header src='http://test.com/test.jpg' />
  )
  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})