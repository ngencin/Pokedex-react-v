import React, { FunctionComponent, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loard';
import './pokemon-detail.css'

const PokemonsDetail: FunctionComponent = () => {
  const {id} = useParams() // cet id est reçu sous forme d'une chaîne de caractères.
  const [pokemon, setPokemon] = useState<Pokemon|undefined>();

  useEffect(() => {
    PokemonService.getPokemon(Number(id)).then(pokemon => setPokemon(pokemon || undefined));
  }, [id]);

  return (
    <div className="content-details">
      { pokemon ? (
        <div className="details-content-pokemon">
          <div className="details-pokemon">
            <h2 className="details-center-header">{pokemon.name}</h2>
            <Link to={`/pokemon/edit/${pokemon.id}`} className='button-card'>
              <i className="fa-solid fa-pen"></i>
            </Link>

            <div className="details-card-hover">
              <div className="card-image">
                {pokemon && pokemon.picture !== null && pokemon.picture !== undefined
                  ? <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                  : <span className="missing-image-text">{pokemon.name}</span>}
              </div>
              <div className="details-card-pokemon">
                <div className="card-content-pokemon">
                  <table className="card-border">
                    <tbody>
                      <tr>
                        <td>Nom</td>
                        <td><strong>{pokemon.name}</strong></td>
                      </tr>
                      <tr>
                        <td>Points de vie</td>
                        <td><strong>{pokemon.hp}</strong></td>
                      </tr>
                      <tr>
                        <td>Dégâts</td>
                        <td><strong>{pokemon.cp}</strong></td>
                      </tr>
                      <tr>
                        <td>Types</td>
                        <td>
                          {pokemon.types.map(type => (
                            <span key={type} className={formatType(type)}>{type}</span>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <td>Date de création</td>
                        <td>{formatDate(pokemon.created)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center"><Loader/></h4>
      )}
    </div>
  );
}

export default PokemonsDetail;