import React, {useState} from 'react';
import API from '../utils/API';

function Search() {
  const [bookSearch, setBookSearch] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setBookSearch(value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(bookSearch)
      .then(res => console.log(res))
  }

  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" value={bookSearch} onChange={handleInputChange}/>
      <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleFormSubmit}>Button</button>
    </div>
  )
}

export default Search;