import React, { Component } from 'react';
import {
    FlatList,
} from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        list: state.suggestionList
    }
}

class SuggestionList extends Component {
    keyExtractor = (item) => item.id.toString()
    itemSeparator = () => <Separator />
    renderItem = ({ item }) => {
        return (
            <Suggestion{...item} />
        )
    }
    render() {
        return (
            <Layout
                title='Recommended For You'
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>

        )
    }
}

export default connect(mapStateToProps)(SuggestionList);