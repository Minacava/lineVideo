import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestions';


class CategoryList extends Component {
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text='No hay categorias :(' />
    itemSeparator = () => <Separator />
    renderItem = ({ item }) => {
        return (
            <Suggestion{...item} />
        )
    }
    render() {
        return (
            <View>
                <FlatList
                    horizontal
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

export default CategoryList;