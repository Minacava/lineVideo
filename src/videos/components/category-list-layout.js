import React from 'react';
import {
    Text,
    StyleSheet,
    ImageBackground,
} from 'react-native';

function CategoryListLayout(props) {
    return (
        <ImageBackground
            // source={require('../../../assets/background.png')}
            style={styles.container}
        >
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    title: {
        color: '#F75C5E',
        fontSize: 30,
        marginBottom: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        marginLeft: 8,
    }
})

export default CategoryListLayout;

