import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import CharactersContainer from './components/characters/CharactersContainer';
import CharacterContainer from './components/character/CharacterContainer';

function Router() {
  return (
    <BrowserRouter>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink exact to="/characters" activeClassName="active1">
        Characters
      </NavLink>
      <NavLink exact to="/random" activeClassName="active2">
        Random
      </NavLink>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/characters" component={CharactersContainer} />
        <Route exact path="/characters/:id" component={CharacterContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
