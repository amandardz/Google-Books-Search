import React from 'react';
import './style.css'

function Thumbnail({ src }) {
  return (
    <div
    className="thumbnail"
    role="img"
    aria-label="Book"
    style={{
      backgroundImage: `url(${src})`
    }}
  />
  )
}

export default Thumbnail;