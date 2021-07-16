import React from 'react';
import Thumbnail from '../Thumbnail';
import Button from '../Button';

function SavedCard({title, author, description, thumbnail, link, onDelete}) {
  return (
    <div className='card'>
        <p>{title}</p>
        <Thumbnail src={thumbnail}/>
          {description}
        <a href={link} target='_blank' rel="noopener noreferrer">
          <Button> 
            View
          </Button>
        </a>
        <Button onClick={onDelete}>
          Delete
        </Button>
    </div>
  )
}

export default SavedCard;