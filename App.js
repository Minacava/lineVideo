import React, { Component } from "react";

import Home from "./src/screens/containers/home";
import Header from "./src/sections/components/header";
import SuggestionList from "./src/videos/containers/suggestion-list";
import API from "./utils/api";
import CategoryList from "./src/videos/containers/category-list.js";
import Player from "./src/player/containers/player";
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {
  // state = {
  //   categoryList: [],
  //   suggestionList: [],
  //   loading: true
  // };
  async componentDidMount() {
    const suggestionList = await API.getSuggestions(10);
    const categoryList = await API.getMovies();
    console.log(movies);
    console.log(categories);
    // this.setState({
    //   categoryList: categories,
    //   suggestionList: movies,
    //   loading: false
    // });
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })

  }
  render() {
    return (
      <Provider
        store={store}
      >
        <Home>
          <Header />
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}
