import React from 'react'
import renderer from 'react-test-renderer'

import Thumbnail from '../Thumbnail'

test('Thumbnail renders correctly', () => {
  const component = renderer.create(
    <Thumbnail src='http://test.com/test.jpg' />
  )
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})