import React from 'react'
import { mount, shallow } from 'enzyme'

import SearchForm from '../SearchForm'

test('SearchForm renders correctly', () => {
  const component = shallow(
    <SearchForm onSearch={f => f} />
  )

  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})

test('SearchForm calls onSearch with the contents of the input when the form is submitted', () => {
  const onSearchStub = jest.fn()
  const component = mount(
    <SearchForm onSearch={onSearchStub} />
  )

  component.find('input').simulate('change', { target: { value: 'Test' } })
  component.find('button').get(0).click()

  expect(onSearchStub).toBeCalledWith('Test')
})