import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import './pokemon-search.css'

 
const PokemonSearch: FunctionComponent = () => {
  
  const [term, setTerm] = useState<string>('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);
 
    if(term.length <= 1) {
      setPokemons([]);
      return;
    }
 
    PokemonService.searchPokemon(term).then(pokemons => setPokemons(pokemons));
  }
  
  return (
    <div className="search-pokemons"> 
      <div className="card-content-pokemons"> 
        <div className="search-text"> 
        <input type="text" placeholder="Rechercher un pokémon" value={term} onChange={e => handleInputChange(e)} /> 
        </div> 
        <div className='collection'>
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`} className="collection-item">
            {pokemon.name}
          </Link>
        ))}
        </div> 
      </div> 
      </div> 
  );
}
  
export default PokemonSearch;