import axios from 'axios';

const getPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=151'
});

export default getPokemon;