import axios from 'axios';

export default {
  getBooks: function (bookSearch) {
    return axios(`/api/books/${bookSearch}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  },
  saveBook: function (book) {
    return axios('/api/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: book
    });
  },
  getSavedBook: function () {
    return axios('/api/books');
  },
  
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
