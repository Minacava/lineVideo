import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';
import API from '../../../utils/api';
import { connect } from 'react-redux';

class Search extends Component {
    state = {
        text: '',
    }
    handelSubmit = async () => {
        const movie = await API.searchMovie(this.state.text)
        console.log(movie)
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movies[0]
            }
        })
    }
    handleChangeText = (text) => {
        this.setState({
            text
        })
    }
    render() {
        return (
            <TextInput
                style={styles.input}
                placeholder='Search new Movies'
                autoCorrect={false}
                autoCapitalize='none'
                underlineColorAndroid='transparent'
                onSubmitEditing={this.handelSubmit}
                onChangeText={this.handleChangeText} />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        marginBottom: 7,
        borderColor: '#eaeaea'
    },

})

export default connect(null)(Search);