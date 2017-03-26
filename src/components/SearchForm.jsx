import React from 'react'

class SearchForm extends React.Component {
  constructor() {
    super()
    
    this.state = {
      query: ''
    }
  }
  
  static propTypes = {
    onSearch: React.PropTypes.func.isRequired
  }

	handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSearch(this.state.query)
  }
  
  render() {
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Enter your search'
            style={{ marginRight: '5px'}}
            onChange={(e) => this.setState({query: e.target.value})}
          />
        </div>
        
        <button
          type='submit'
          className='btn btn-default'>
          Search
        </button>
      </form>
    )
  }
}

export default SearchForm