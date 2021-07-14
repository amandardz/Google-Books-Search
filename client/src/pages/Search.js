import React, {useState} from 'react';
import Container from '../components/Container';
import Searchbar from '../components/Searchbar';
import Card from '../components/Card'
import API from '../utils/API';

function Search() {
  const [bookSearch, setBookSearch] = useState('');
  const [searchResults, setSearchResults] = useState();

  const handleInputChange = event => {
    const { value } = event.target;
    setBookSearch(value);
  }
 
  const handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(bookSearch)
    .then(res => {setSearchResults(res.data)})
    .catch(err => console.log(err))
  }


  return (
    <>
      <Searchbar value={bookSearch} onChange={handleInputChange} onClick={handleFormSubmit}/>
      <Container>
        <Card/>
      </Container>
    </>
  )
}

export default Search;