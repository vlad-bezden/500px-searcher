import React from 'react'
import renderer from 'react-test-renderer'

import Thumbnails from '../Thumbnails'

import { MOCK_500PX_PHOTOS_RESPONSE } from '../../tests/mocks'

test('Thumbnails renders correctly', () => {
    const component = renderer.create(
        <Thumbnails photos={JSON.parse(MOCK_500PX_PHOTOS_RESPONSE).photos} />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})