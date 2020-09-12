import axios from 'axios';

const getPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export default getPokemon;