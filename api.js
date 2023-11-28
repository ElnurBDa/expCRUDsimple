const dotenv = require('dotenv').config();
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search',
  params: {
    query: '<REQUIRED>'
  },
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
  }
};

exports.getJoke = async (query) => {
    try {
        options.params.query = query;
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

exports.getJoke("love")