import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import Empty from '../components/empty';
import Separator from '../components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import { connect } from 'react-redux';


function mapStateToProps(state) { }


class CategoryList extends Component {
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text='No hay categorias :(' />
    itemSeparator = () => <Separator />
    renderItem = ({ item }) => {
        return (
            <Category{...item} />
        )
    }
    render() {
        return (
            <Layout
                title='Categories'>
                <FlatList
                    horizontal
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(CategoryList);