import React, { Component } from 'react';
import { Text } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api';

export default class App extends Component {

  async componentDidMount() {
    const movies = API.getSuggestions(10);
    console.log(movies)
  }

  render() {
    return (
      <Home>
        <Header></Header>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
        <SuggestionList />
      </Home>
    );
  }
}

