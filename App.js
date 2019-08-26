import React, { Component } from "react";
import {
  Text
} from 'react-native'
import Home from "./src/screens/containers/home";
import Header from "./src/sections/components/header";
import SuggestionList from "./src/videos/containers/suggestion-list";
import API from "./utils/api";
import CategoryList from "./src/videos/containers/category-list.js";
import Player from "./src/player/containers/player";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Loading from "./src/sections/components/loading";

export default class App extends Component {
  // state = {
  //   categoryList: [],
  //   suggestionList: [],
  //   loading: true
  // };
  async componentDidMount() {
    const categoryList = await API.getMovies();
    console.log(categoryList)
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestions(10);
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
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <Home>
            <Header />
            <Player />
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider >
    );
  }
}
