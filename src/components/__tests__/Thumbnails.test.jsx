import React from 'react'
import { shallow } from 'enzyme'

import Thumbnails from '../Thumbnails'

import { MOCK_500PX_PHOTOS_RESPONSE } from '../../tests/mocks'

const photosMock = JSON.parse(MOCK_500PX_PHOTOS_RESPONSE).photos

test('Thumbnails renders correctly', () => {
  const component = shallow(
    <Thumbnails photos={photosMock} onClick={f => f} />
  )

  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})

test('Thumbnails calls onClick with the content photo', () => {
  const onClickStub = jest.fn()
  const component = shallow(
    <Thumbnails photos={photosMock} onClick={onClickStub} />
  )

  component.find('a').at(0).simulate('click')

  expect(onClickStub).toBeCalledWith(photosMock[0])
})