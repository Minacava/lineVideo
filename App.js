import React, { Component } from 'react';
import { Text, ActivityIndicator, View } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api';
import Loader from './utils/loader';


export default class App extends Component {
  state = {
    suggestionList: [],
    loading: true
  }
  async componentDidMount() {
    const movies = await API.getSuggestions(10);
    console.log(movies)
    this.setState({
      suggestionList: movies,
      loading: false,
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
        {this.state.loading ? (
          <Loader />
        ) : (
            <SuggestionList
              list={this.state.suggestionList}
            />
          )

        }

      </Home>
    );
  }
}

