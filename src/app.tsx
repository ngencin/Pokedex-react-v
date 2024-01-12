import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonPost from './pages/pokemon-add';



import Header from './pages/header';
import Footer from './pages/footer';


const App: FunctionComponent = () => {


 return (
  <Router>
    <div>
      {/*La barre de navigation commun à toutes les pages*/}
      <Header/>
      {/*Le système de gestion des routes de notre applicaton*/}
      <Routes>
        <Route  path="/" element={<PokemonList />} />
        <Route  path="/pokemons" element={<PokemonList />} />
        <Route  path="/pokemon/post" element={<PokemonPost />} />
        <Route  path="/pokemon/edit/:id" element={<PokemonEdit />} />
        <Route path="/pokemons/:id" element={<PokemonDetail/>} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
 )
}
  
export default App;