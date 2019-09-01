import React from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated
} from 'react-native';

function Suggestion(props) {
    this.fadeImage = new Animated.Value(0)
    Animated.timing(this.fadeImage, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
    }).start()
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View style={styles.contanier}>
                <View style={styles.left}>
                    <Animated.Image
                        style={[styles.cover,
                        {
                            opacity: this.fadeImage,
                            transform: [
                                {
                                    scale: this.fadeImage.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.85, 1],
                                    })
                                }
                            ]

                        }]}
                        source={{ uri: props.medium_cover_image }}
                    />
                </View>
                <View style={styles.genre}>
                    <Text style={styles.genreText}>{props.genres[0]}</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.year}>{props.year}</Text>
                    <Text style={styles.rating}>IMDB {props.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#F2F2F3',
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
        paddingLeft: 25,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        color: "#283547",
        fontWeight: 'bold',
        paddingBottom: 6
    },
    year: {
        backgroundColor: '#3E55F3',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        paddingTop: 3

    },

})

export default Suggestion;