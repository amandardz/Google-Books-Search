const router = require("express").Router();
const axios = require('axios');
const booksController = require('../../controllers/booksControllers')
require('dotenv').config();

router.get('/books/:search', async(req, res) => {
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=${apiKey}`);
    res.json(response.data)
  } catch (error) {
    console.log(error);
  }
})

router.get('/books', booksController.findAll)

router.post('/books', booksController.create)

router.delete('/books/:id', booksController.remove)

module.exports = router;