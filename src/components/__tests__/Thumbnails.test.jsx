import React from 'react'
import { shallow } from 'enzyme'

import Thumbnails from '../Thumbnails'

import { MOCK_500PX_PHOTOS_RESPONSE } from '../../tests/mocks'

test('Thumbnails renders correctly', () => {
  const component = shallow(
    <Thumbnails photos={JSON.parse(MOCK_500PX_PHOTOS_RESPONSE).photos} onClick={f => f} />
  )

  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})

test('Thumbnails calls onClick with the content photo', () => {
  const onClickStub = jest.fn()
  const photos = JSON.parse(MOCK_500PX_PHOTOS_RESPONSE).photos
  const component = shallow(
    <Thumbnails photos={photos} onClick={onClickStub} />
  )

  component.find('a').at(0).simulate('click')

  expect(onClickStub).toBeCalledWith(photos[0])
})