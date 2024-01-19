import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';
import './login.css'

type Field = {
  value?: any,
  error?: string,
  isValid?: boolean
};

type Form = {
  username: Field,
  password: Field
}

const Login: FunctionComponent = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    username: { value: '' },
    password: { value: '' },
  });

  const [message, setMessage] = useState<string>('Vous êtes déconnecté. (Pokemon / Pokedex)');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField});
  }

  const validateForm = () => {
    let newForm: Form = form;

    // Validator username
    if(form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if(form.password.value.length < 6) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 6 caractères de long.';
      const newField: Field = {value: form.password.value, error: errorMsg, isValid: false};
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ password: newField } };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if(isFormValid) {
      setMessage('👉 Tentative de connexion en cours ...');
      AuthenticationService.login(form.username.value, form.password.value).then(isAuthenticated => {
        if(!isAuthenticated) {
          setMessage('🔐 Identifiant ou mot de passe incorrect.');
          return;
        }
        
        navigate('/pokemons');
        
      });
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="log-css">
          <div className="log-card">
            <div className="card-stacked">
              
                {/* Form message */}
                {message && 
                  <div className="log-co">
                    {message}
                  </div>
                }
                {/* Field username */}
                <div className="card-content">
                <div className="form-group">
                  <label htmlFor="username">Identifiant</label>
                  <input id="username" type="text" name="username" className="form-control" value={form.username.value} onChange={e => handleInputChange(e)}></input>
                  {/* error */}
                  {form.username.error &&
                  <div className="log-error"> 
                   {form.username.error} 
                  </div>} 
                </div>
                {/* Field password */}
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input id="password" type="password" name="password" className="form-control" value={form.password.value} onChange={e => handleInputChange(e)}></input>
                  {/* error */}
                  {form.password.error &&
                  <div className="log-error"> 
                   {form.password.error} 
                  </div>} 
                </div>
              
              <div className="form-group">
                {/* Submit button */}
                <input type="submit" className='log-button' value="Connexion" />
              </div>
              </div>
            </div>
          </div>
        </div>
    </form>
  );
};
 
export default Login;