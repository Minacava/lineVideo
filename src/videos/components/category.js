import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Platform
} from 'react-native';

function Category(props) {
    return (
        <View
            style={styles.wrapper}>
            <Text style={styles.genre}>{props.genres[0]}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#397DE8'
    },
    genre: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0, .20)',
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        ...Platform.select({
            ios: {
                textShadowRadius: 0,
            },
            android: {
                textShadowRadius: 1,
            },
        }),


    }

})
export default Category;