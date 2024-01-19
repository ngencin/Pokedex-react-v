import React, { FunctionComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loard';
 
const PokemonEdit: FunctionComponent = () => {
  const {id} = useParams() // cet id est reçu sous forme d'une chaîne de caractères.
  const [pokemon, setPokemon] = useState<Pokemon|undefined>();
      
  useEffect(() => {
      PokemonService.getPokemon(Number(id)).then(pokemon => setPokemon(pokemon || undefined));
      }, [id]);
    
  return (
    <div>
      { pokemon ? (
        <div className="content-header-edit">
            <h2 className="details-center-header">Éditer { pokemon.name }</h2>
            <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className="center"><Loader/></h4>
      )}
    </div>
  );
}
  
export default PokemonEdit;