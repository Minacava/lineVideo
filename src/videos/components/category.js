import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';

function Category(props) {
    return (
        <TouchableOpacity
            style={styles.wrapper}>
            <Text style={styles.genre}>{props.genres[0]}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        width: 150,
        height: 80,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#283547'
    },
    genre: {
        color: 'white',
        fontSize: 20,
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