import React, { Component } from 'react';
import '../Pokecard/Pokecard.css';
const poke_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = number => {
    return (number <= 999 ? `00${number}`.slice(-3): number);
}


class Pokecard extends Component {
    render() {
        const {id, name, type, exp} = this.props;
        let imgSrc = `${poke_API}${padToThree(id)}.png`;
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{name}</h1>
                <div className='Pokecard-image'><img src={imgSrc} alt='pokemon'/></div>
                <p className='Pokecard-data'>Type:{type}</p>
                <p className='Pokecard-data'>Exp:{exp}</p>
            </div>
        );
    }
}

export default Pokecard;