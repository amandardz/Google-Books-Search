import React from 'react';

function Container(props) {
  return (
    <div className='container border border-3 border-dark'>
      {props.children}
    </div>
  )
}

export default Container;