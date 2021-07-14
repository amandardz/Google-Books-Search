import React from 'react';
import Thumbnail from '../Thumbnail';
import Button from '../Button';

function Card({title}) {
  return (
    <div className='card'>
      <div className='d-flex flex-row justify-content-between'>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <Button />
          <Button />
        </div>
      </div>
      <div className='d-flex flex-row justify-content-around'>
        <div>
          <Thumbnail />
        </div>
        <div>
          description
        </div>
      </div>
    </div>
  )
}

export default Card;