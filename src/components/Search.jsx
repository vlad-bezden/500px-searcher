import React from 'react'

import SearchForm from './SearchForm'
import Thumbnails from './Thumbnails'
import request from '../request'

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      photos: []
    }
  }

  static propTypes = {
    onShowPhoto: React.PropTypes.func.isRequired
  }

  search = (query) => {
    request(query)
      .then(json => {
        this.setState({
          photos: json.photos
        })
      })
  }

  render() {
    const { photos } = this.state
    const { onShowPhoto } = this.props

    return (
      <div>
        <div
          style={{
            marginBottom: '20px'
          }}>
          <SearchForm onSearch={this.search} />
        </div>

        <Thumbnails photos={photos} onClick={onShowPhoto} />
      </div>
    )
  }
}

export default Search