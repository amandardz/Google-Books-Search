import axios from 'axios';
require('dotenv').config();

export default {
  getBooks: function(query) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '&printType=books&orderBy=relevance&key=' + process.env.REACT_APP_API_KEY)
  },
}
