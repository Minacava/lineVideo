import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { WebView } from 'react-native-webview';

function Details(props) {
    const [color, heart] = useState('black');
    // es necesario que el click persista una vez el usuario salió de la pantalla de la pelicula.
    // el usuario deberia poder deshacer el click
    function handleButtomClick() {
        heart('red')
    }
    function handleShare() {
        console.log('share')
    }
    function handleSend() {
        console.log('sending comment...')
    }
    const makeHTML = (id) => {
        return (`
        <style>
          .video {
            position: relative;
            padding-bottom: 56.25%;
          }
          iframe {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
          }
        </style>
        <div class="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      `)
    }

    return (
        <ScrollView>
            <View style={styles.top}>
                <Text style={styles.title} >{props.title}</Text>
                <View style={styles.likeContainer}>
                    <TouchableOpacity
                        onPress={handleButtomClick}>
                        <Icon
                            name='heart'
                            color={color}
                            size={17}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleShare}
                        style={styles.share}>
                        <Icon
                            name='comment'
                            color='black'
                            size={17}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSend}
                        style={styles.share}>
                        <Icon
                            name='paper-plane'
                            color='black'
                            size={17}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.details}>
                    <Image
                        style={styles.cover}
                        source={{ uri: props.medium_cover_image }}
                    />
                    <Text style={styles.description}>{props.description_full}</Text>
                </View>
                <View
                    style={styles.trailer}>
                    <WebView
                        source={{ html: makeHTML(props.yt_trailer_code) }} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {},
    trailer: {
        height: 200
    },
    details: {
        flexDirection: "row",
        marginBottom: 20
    },
    cover: {
        margin: 5,
        width: 125,
        height: 190,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title: {
        fontSize: 18,
        color: "#283547",
        fontWeight: 'bold',
        paddingBottom: 6
    },
    top: {
        borderBottomWidth: 1,
        borderBottomColor: "#eaeaea",
        padding: 20,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    likeContainer: {
        flexDirection: 'row',
    },
    number_likes: {
        marginRight: 5,
        fontSize: 12,
    },
    share: {
        marginLeft: 10,
    },
    bottom: {
        padding: 20,
        marginBottom: 20
    },
    description: {
        fontSize: 12,
        lineHeight: 22.5,
        color: "#4c4c4c",
        marginLeft: 10,
        flex: 1
    }
});
