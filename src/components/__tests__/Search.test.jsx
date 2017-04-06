require('isomorphic-fetch')

import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'

import Search from '../Search'
import SearchForm from '../SearchForm'

import { MOCK_500PX_PHOTOS_RESPONSE } from '../../tests/request'
jest.mock('../../tests/request')

test('Search renders correctly', () => {
  const component = shallow(
    <Search onShowPhoto={f => f} />
  )
  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})

test('Search searches correctly', (done) => {
  fetchMock.get(`https://api.500px.com/v1/photos/search?
		consumer_key=lILSGooAAcT8UA91VwlYViFeiY3SuPoebq9BtRQ4&
		image_size[]=3&
		image_size[]=4&
		term=test`,
    MOCK_500PX_PHOTOS_RESPONSE)

  const component = shallow(
    <Search onShowPhoto={f => f} />
  )

  const searchForm = component.find(SearchForm)
  searchForm.prop('onSearch')('test')

  setTimeout(() => {
    const tree = component.getNode()
    expect(tree).toMatchSnapshot()

    expect(fetchMock.calls.length).toBe(1)

    done()
  }, 0)
})

test('Thumbnails calls onShowPhoto when it clicked', () => {
  const onClickStub = jest.fn()
  const component = shallow(
    <Search onShowPhoto={onClickStub} />
  )

  component.find('Thumbnails').simulate('click')
  expect(onClickStub).toBeCalled()
})