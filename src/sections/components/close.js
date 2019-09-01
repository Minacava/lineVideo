import React from 'react';
import {
    Text,
    View,
    Animated,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


function Close(props) {
    this.fadeAnimation = new Animated.Value(0)
    Animated.timing(this.fadeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
    }).start()
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
        >
            <Animated.Text style={[styles.button, { opacity: this.fadeAnimation }]}>X</Animated.Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        backgroundColor: '#EE0039',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        top: 25,
    }
})

export default Close;