import React from 'react'

const Thumbnail = ({ src }) => (
    <div>
        <img src={src} />
    </div>
)

Thumbnail.propTypes = {
  src: React.PropTypes.string.isRequired
}

export default Thumbnail