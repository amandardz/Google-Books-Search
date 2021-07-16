import React from 'react';
import Thumbnail from '../Thumbnail';
import Button from '../Button';

function SearchCard({title, author, description, thumbnail, link, onSave}) {
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
        <Button onClick={onSave}>
          Save
        </Button>
    </div>
  )
}

export default SearchCard;