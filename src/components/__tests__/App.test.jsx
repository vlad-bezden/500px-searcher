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

test('App should set modalVisible to false when user click on hide button', () => {
  const component = shallow(
    <App />
  )
  component.setState({
    modalVisible: true
  })

  component.find('PhotoModal').prop('onHide')()

  expect(component.state('modalVisible')).toBe(false)
})