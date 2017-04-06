import React from 'react'
import { shallow } from 'enzyme'

import PhotoModal from '../PhotoModal'
import { MOCK_500PX_PHOTOS_RESPONSE } from '../../tests/mocks'

const photo = JSON.parse(MOCK_500PX_PHOTOS_RESPONSE).photos[0]

test('PhotoModal renders correctly when there is no photo', () => {
  const component = shallow(
    <PhotoModal show={true} onHide={f => f} />
  )

  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})

test('PhotoModal renders correctly when there is a photo', () => {
  const component = shallow(
    <PhotoModal photo={photo} show={true} onHide={f => f} />
  )

  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})

test('PhotoModal calls onHide when hide button is clicked', () => {
  const onHideStub = jest.fn()
  const component = shallow(
    <PhotoModal photo={photo} show={true} onHide={onHideStub} />
  )

  component.simulate('hide')

  expect(onHideStub).toBeCalled()
})