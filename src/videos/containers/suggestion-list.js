import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';

import Layout from '../components/suggestion-list-layout';

export default class SuggestionList extends Component {
    render() {
        const list = [
            {
                title: 'mina',
                key: '1'
            },
            {
                title: 'marina',
                key: '2'
            }
        ]
        return (
            <Layout
                title='Recomendaciónes'>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                />
            </Layout>

        )
    }
}