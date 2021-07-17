import React, {useState} from 'react';
import Container from '../components/Container';
import Searchbar from '../components/Searchbar';
import SearchCard from '../components/SearchCard';
import API from '../utils/API';

function Search() {
  const [bookSearch, setBookSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = event => {
    const { value } = event.target;
    setBookSearch(value);
  }

  const saveBook = (book) => {
    API.saveBook(book).then((res) => {
      alert('Book Saved')
      console.log(res);
    });
  };
 
  const handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(bookSearch)
    .then((res) => setSearchResults(res.data.items))
    .catch(err => console.log(err))
  }


  return (
    <>
      <Searchbar value={bookSearch} onChange={handleInputChange} onClick={handleFormSubmit}/>
      <Container>
        {searchResults.map(
          ({
            id, 
            volumeInfo: {
              title, 
              authors,
              description,
              infoLink,
              imageLinks: { thumbnail } = {}
            },
          }) => {
          return(
            <SearchCard 
              key={id}
              title={title}
              authors={authors}
              description={description}
              thumbnail={thumbnail}
              link={infoLink}
              onSave={() => {
                saveBook({ title, authors, description, image: thumbnail, link: infoLink});
              }}
            />
          );
          })}
      </Container>
    </>
  )
}

export default Search;