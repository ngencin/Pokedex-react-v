import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
import PokemonService from '../services/pokemon-service';
import './pokemon-form.css'
 

type Props = { 
  pokemon: Pokemon,
  isEditForm: boolean;
};

type Field = {
    value?: any,
    error?: string,
    isValid?: boolean;
}

type Form = {
    picture: Field,
    name: Field,
    hp: Field,
    cp: Field,
    types: Field
}

const PokemonForm: FunctionComponent<Props> = ({pokemon, isEditForm}) => {
  
    const navigate = useNavigate();

    const [form, setForm] = useState<Form>({
        picture: { value: pokemon.picture, isValid:true },
        name: { value: pokemon.name, isValid: true },
        hp: { value: pokemon.hp, isValid: true },
        cp: { value: pokemon.cp, isValid: true },
        types: { value: pokemon.types, isValid: true }
    });


    const types: string[] = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];


    const hasType = (type: string): boolean =>{
    return form.types.value.includes(type);
    }

    const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
    const checked = e.target.checked;
    let newField: Field;

    if(checked) {
      // Si l'utilisateur coche un type, on l'ajoute à la liste des types du pokémon.
      const newTypes: string[] = form.types.value.concat([type]);
      newField = { value: newTypes };
    } else {
      // Si l'utilisateur décoche un type, on le retire de la liste des types du pokémon.
      const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type);
      newField = { value: newTypes };
    }

    setForm({...form, ...{ types: newField }});
  }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue} };

    setForm({...form, ...newField});
}


const validateForm = () => {
    let newForm: Form = form;

    // Validator url
    if(isAddForm()) {

        const start = " ";
        const end = ".png";
  
        if(!form.picture.value.startsWith(start) || !form.picture.value.endsWith(end)) {
          const errorMsg: string = 'L\'url n\'est pas valide.';
          const newField: Field = { value: form.picture.value, error: errorMsg, isValid: false };
          newForm = { ...newForm, ...{ picture: newField } };
        } else {
          const newField: Field = { value: form.picture.value, error: '', isValid: true };
          newForm = { ...newForm, ...{ picture: newField } };
        }
      }
    
    // Validator name
    if(!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
      const errorMsg: string = 'Le nom du pokémon est requis (1-25).';
      const newField: Field = { value: form.name.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ name: newField } };
    } else {
      const newField: Field = { value: form.name.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ name: newField } };
    }

    // Validator hp
    if(!/^[0-9]{1,3}$/.test(form.hp.value)) {
      const errorMsg: string = 'Les points de vie du pokémon sont compris entre 0 et 999.';
      const newField: Field = {value: form.hp.value, error: errorMsg, isValid: false};
      newForm = { ...newForm, ...{ hp: newField } };
    } else {
      const newField: Field = { value: form.hp.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ hp: newField } };
    }

    // Validator cp
    if(!/^[0-9]{1,2}$/.test(form.cp.value)) {
      const errorMsg: string = 'Les dégâts du pokémon sont compris entre 0 et 99';
      const newField: Field = {value: form.cp.value, error: errorMsg, isValid: false};
      newForm = { ...newForm, ...{ cp: newField } };
    } else {
      const newField: Field = { value: form.cp.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ cp: newField } };
    }

    setForm(newForm);
    return newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid;
  }


 
  const isTypesValid = (type: string): boolean => {
    if(form.types.value.length === 1 && hasType(type)) {
       return false;  
    }
   
    if(form.types.value.length >= 3 && !hasType(type)){
        return false;
    }
    return true;
  }

 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const isFormValid = validateForm();

   if(isFormValid){
    pokemon.name = form.name.value;
    pokemon.hp = form.hp.value;
    pokemon.cp = form.cp.value;
    pokemon.types = form.types.value;
    pokemon.picture = form.picture.value;
    isEditForm ? updatePokemon() : addPokemon();
    navigate ('/')
  }
  }
 
  const addPokemon = async () => {
    const newPokemon = await PokemonService.addPokemon(pokemon);
    return newPokemon;
  }


  const updatePokemon = () => {
    PokemonService.updatePokemon(pokemon).then(() => navigate(`/pokemons/${pokemon.id}`))
}


  const deletePokemon = () => {
    PokemonService.deletePokemon(pokemon).then(() => navigate(`/pokemons`))
  }

  const isAddForm = (): boolean => {
    return !isEditForm;
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)}> 
      <div className="content-add">
       <div className="card-hover"> 
            <div className="card-stacked">
              <div className="card-add-content">
              {isEditForm && (
             <div className="card-image">
             <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
             <span className="button-card">  
             <i onClick={deletePokemon} className="fa-solid fa-trash"></i>
             </span>
           </div>
            )}
                {/* Pokemon picture */}
                {isAddForm() &&(
                     <div className="form-group">
                  <label htmlFor="name">Image</label>
                  <input id="picture" name="picture" type="text" className="form-control" value={form.picture.value} onChange={e => handleInputChange(e)}></input>
                {form.picture.error &&
                <div className="card-pannel red accent-1">
                    {form.picture.error}
                </div>
                }
                </div> 
                )}
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input id="name" name="name" type="text" className="form-control" value={form.name.value} onChange={e => handleInputChange(e)}></input>
                {form.name.error &&
                <div className="card-pannel red accent-1">
                    {form.name.error}
                </div>
                }
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input id="hp" name="hp" type="number" className="form-control" value={form.hp.value} onChange={e => handleInputChange(e)}></input>
                  {form.hp.error &&
                <div className="card-pannel red accent-1">
                    {form.hp.error}
                </div>
                }
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input id="cp" name="cp" type="number" className="form-control" value={form.cp.value} onChange={e => handleInputChange(e)}></input>
                  {form.cp.error &&
                <div className="card-pannel red accent-1">
                    {form.cp.error}
                </div>
                }
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={type} type="checkbox" className="filled-in" value= {type} disabled={!isTypesValid(type)} checked={hasType(type)} onChange={e => selectType(type, e)}></input>
                        <span>
                          <p className={formatType(type)}>{ type }</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div> 
                <div className="card-action">
                {/* Submit button */}
                <button type="submit" className="btn-valid">Valider</button>
              </div>
              </div>
             
            </div>
          </div>
        </div>
    </form>
  );
};
   
export default PokemonForm;