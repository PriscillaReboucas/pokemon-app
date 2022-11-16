const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const URL_POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

app
  .route('/api/pokemons')
  .get(async (req, res) => {
    try {
      let response = await fetch(URL_POKEMON_LIST);
      response = await response.json();
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({msg: `Internal Server Error.`});
    }
  })
app
  .route('/api/pokemons/:name')
  .get(async (req, res) => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`);
      response = await response.json();
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({msg: `Internal Server Error.`});
    }
  })
app
  .route('/api/pokemons/ability/:abilityName')
  .get(async (req, res) => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/ability/${req.params.abilityName}`);
      response = await response.json();
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({msg: `Internal Server Error.`});
    }
  })
app
  .route('/api/pokemons/type/:typeName')
  .get(async (req, res) => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/type/${req.params.typeName}`);
      response = await response.json();
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({msg: `Internal Server Error.`});
    }
  })
  app
  .route('/api/types')
  .get(async (req, res) => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/type/`);
      response = await response.json();
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({msg: `Internal Server Error.`});
    }
  })
app
  .route('/api/species/')
  .get(async (req, res) => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/`);
      response = await response.json();
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({msg: `Internal Server Error.`});
    }
  })
app
  .route('/api/species/:pokemonName')
  .get(async (req, res) => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${req.params.pokemonName}`);
      response = await response.json();
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({msg: `Internal Server Error`});
    }
  })
  
module.exports.app = app;