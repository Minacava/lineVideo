import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Animation from 'lottie-react-native';
import Activity from './animation.json';

export default class Loader extends Component {
    componentDidMount() {
        this.animation.play();
    }
    render() {
        return (
            <View >
                <View style={styles.container}>
                    <Animation
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 80,
                            height: 80
                        }}
                        loop={true}
                        source={Activity}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});
