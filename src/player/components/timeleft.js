import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

function TimeLeft(props) {
    return (
        <View>
            <Text style={styles.timer}>
                {props.currentTime}/{props.duration}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    timer: {
        width: 150,
        marginHorizontal: 10,
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    }
})
export default TimeLeft