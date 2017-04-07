import React from 'react'
import { shallow } from 'enzyme'

import Search from '../Search'
import SearchForm from '../SearchForm'

// intercepts call to request. Test data is located in __mocks__ folder
jest.mock('../../request')

test('Search renders correctly', () => {
  const component = shallow(
    <Search onShowPhoto={f => f} />
  )
  const tree = component.getNode()

  expect(tree).toMatchSnapshot()
})

// parameter done is required, since we use timeout
// and Jest needs to know when test is finished
test('Search searches correctly', (done) => {
  const component = shallow(
    <Search onShowPhoto={f => f} />
  )
  const searchForm = component.find(SearchForm)
  searchForm.prop('onSearch')('test')

  // this is required because pictures are taken from promise
  setTimeout(() => {
    const tree = component.getNode()
    expect(tree).toMatchSnapshot()

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