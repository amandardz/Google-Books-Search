import React from 'react';
import Thumbnail from '../Thumbnail';
import Button from '../Button';
import './style.css'

function SavedCard({title, author, description, thumbnail, link, onDelete}) {
  return (
    <div className='savedCard px-2 my-2'>
      <div className='d-flex flex-row justify-content-between mt-1'>
        <div>
          <p className='title m-0'>{title}</p>
          <p className='authors'>{author}</p>
        </div>
        <div className='btnContainer d-flex align-items-start'>
          <a href={link} target='_blank' rel="noopener noreferrer">
            <Button type='warning' className='me-1'> 
              View
            </Button>
          </a>
          <Button onClick={onDelete} type='danger'>
            Delete
          </Button>
        </div>
      </div>
      <div className='d-flex flex-row'>
        <Thumbnail src={thumbnail}/>
        <p className='description'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default SavedCard;