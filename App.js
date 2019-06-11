import React, { Component } from 'react';
import { Text, ActivityIndicator, View } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api';
import Loader from './utils/loader';
import CategoryList from './src/videos/containers/category-list.js'


export default class App extends Component {
  state = {
    categoryList: [],
    suggestionList: [],
    loading: true,

  }
  async componentDidMount() {
    const movies = await API.getSuggestions(10);
    const categories = await API.getMovies();
    console.log(movies)
    console.log(categories)

    this.setState({
      categoryList: categories,
      suggestionList: movies,
      loading: false,
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <CategoryList
          list={this.state.categoryList}
        />
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

