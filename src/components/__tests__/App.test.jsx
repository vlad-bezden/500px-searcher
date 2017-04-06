import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

test('App renders correctly', () => {
  const component = shallow(
    <App />
  )

  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})

test('App should set modalVisible to false when user clicks on hide button', () => {
  const component = shallow(
    <App />
  )
  component.setState({
    modalVisible: true
  })

  component.find('PhotoModal').prop('onHide')()

  expect(component.state('modalVisible')).toBe(false)
})

test('App should set modalVisible to true and activePhoto to photo when user clicks thumbnail', () => {
  const photo = {}
  const component = shallow(
    <App />
  )
  component.setState({
    modalVisible: false,
    activePhoto: photo
  })

  component.find('Search').prop('onShowPhoto')(photo)

  expect(component.state('modalVisible')).toBe(true)
  expect(component.state('activePhoto')).toBe(photo)
})