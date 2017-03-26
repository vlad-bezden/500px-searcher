import React from 'react'
import renderer from 'react-test-renderer'

import SearchForm from '../SearchForm'

test('SearchForm renders correctly', () => {
    const component = renderer.create(
        <SearchForm onSearch={() => {}} />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})