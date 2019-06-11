import React from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';


function Suggestion(props) {
    return (
        <View style={styles.contanier}>
            <View style={styles.left}>
                <Image
                    style={styles.cover}
                    source={{ uri: props.medium_cover_image }}
                />
            </View>
            <View style={styles.genre}>
                <Text style={styles.genreText}>{props.genres[0]}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.year}>{props.year}</Text>
                <Text style={styles.rating}>{props.rating}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flexDirection: 'row',
    },
    left: {
        borderTopLeftRadius: 90,
        overflow: 'hidden',
    },
    cover: {
        width: 100,
        height: 150,
        resizeMode: 'contain',

    },
    genre: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#623FEF',
        paddingVertical: 5,
        paddingHorizontal: 7,

    },
    genreText: {
        color: 'white',
        fontSize: 11,
    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: "#44546b"
    },
    year: {
        backgroundColor: '#3E55F3',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    },

})

export default Suggestion;