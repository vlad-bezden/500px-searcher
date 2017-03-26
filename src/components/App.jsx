import React from 'react'

import Header from './Header'
import Search from './Search'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <Search />
        </div>
      </div>
    )
  }
}

export default App