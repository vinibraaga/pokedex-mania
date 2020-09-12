import React, { Component } from 'react';
import getPokemon from '../../services/getPokemon';
import './styles.css';

export default class Main extends Component {
    state = {
        pokemons: [],
    }

    componentDidMount(){
        this.loadPokemons();
    }

    loadPokemons = async () => {
        const response = await getPokemon.get('/pokemon/');

        this.setState({ pokemons: response.data.results});

        console.log(response.data.results)
    };

    render() {
        return (
            <div className="pokemon-list">
                   {this.state.pokemons.map(pokemon =>(
                       
                       
                       <h2 key={pokemon._ident}>{pokemon.name}</h2>
                     
                   ))} 
            </div>
        )
    }
}