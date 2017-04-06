import React from 'react'
import { shallow } from 'enzyme'

import Thumbnail from '../Thumbnail'

test('Thumbnail renders correctly', () => {
  const component = shallow(
    <Thumbnail src='http://test.com/test.jpg' />
  )
  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})