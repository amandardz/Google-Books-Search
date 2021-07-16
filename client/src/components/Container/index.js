import React from 'react';

function Container(props) {
  return (
    <div className='container-fluid mt-3'>
      {props.children}
    </div>
  )
}

export default Container;