import React, { Component } from 'react';

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    };


    render(){
        const name = this.props.name;
        const url = this.props.url;

        return (
            <div className='cardBorder'>
                <div className='card'>
                    <div className='card-header'>
                        <h1>{name}</h1>
                    </div>
                </div>
            </div>
        )
    }
}