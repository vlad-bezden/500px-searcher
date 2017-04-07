import React from 'react'
import { shallow } from 'enzyme'

import Thumbnails from '../Thumbnails'
import { pictures } from '../../__mocks__/request'

const photosMock = JSON.parse(pictures).photos

test('Thumbnails renders correctly', () => {
  const component = shallow(
    <Thumbnails photos={photosMock} onClick={f => f} />
  )

  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})

test('Thumbnails calls onClick with the content photo when it clicked', () => {
  const onClickStub = jest.fn()
  const component = shallow(
    <Thumbnails photos={photosMock} onClick={onClickStub} />
  )

  component.find('a').at(0).simulate('click')

  expect(onClickStub).toBeCalledWith(photosMock[0])
})