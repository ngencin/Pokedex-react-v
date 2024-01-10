import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonPost from './pages/pokemon-add';


const App: FunctionComponent = () => {


 return (
  <Router>
    <div>
      {/*La barre de navigation commun à toutes les pages*/}
      <nav>
        <div className="nav-wraper teal">
          <Link to="/" className="brand-logo center">Pokédex</Link>
        </div>
      </nav>
      {/*Le système de gestion des routes de notre applicaton*/}
      <Routes>
        <Route  path="/" element={<PokemonList />} />
        <Route  path="/pokemons" element={<PokemonList />} />
               <Route  path="/pokemon/post" element={<PokemonPost />} />
 <Route  path="/pokemon/edit/:id" element={<PokemonEdit />} />
        <Route path="/pokemons/:id" element={<PokemonDetail/>} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  </Router>
  
 )
}
  
export default App;