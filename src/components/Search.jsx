import React from 'react'

import SearchForm from './SearchForm'
import Thumbnails from './Thumbnails'

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      photos: []
    }
  }

  search = (query) => {
    const apiUrl = `https://api.500px.com/v1/photos/search?
		consumer_key=lILSGooAAcT8UA91VwlYViFeiY3SuPoebq9BtRQ4&
		image_size[]=3&
		image_size[]=4&
		term=${query}`

    fetch(apiUrl)
      .then(response => response.json())
      .then(json => {
        this.setState({
          photos: json.photos
        })
      })
      .catch(error => console.error(error))
  }

  render() {
		const {photos} = this.state
    
    return (
      <div>
        <div
          style={{
            marginBottom: '20px'
          }}>
    			<SearchForm onSearch={this.search} />
        </div>
        
        <Thumbnails photos={photos} />
    	</div>
    )
  }
}

export default Search