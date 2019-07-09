import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import '../Pokedex/Pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
        const {exp, isWinner} = this.props;
        if (isWinner) {
            title = <h1 className='Pokedex-winner'>Winning Hand</h1>
        } else {
            title = <h1 className='Pokedex-loser'>Losing Hand</h1>
        }
        return (
            <div className='Pokedex'>
                {title}
                <h4>total experience: {exp}</h4>
                <div className='Pokedex-cards'>
                {this.props.pokemon.map(p => {
                    return <Pokecard  id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                })}
                </div>
            </div>
        );
    }
}

export default Pokedex;