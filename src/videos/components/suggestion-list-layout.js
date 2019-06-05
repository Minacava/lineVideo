import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

function SuggestionListLayout(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        color: '#464BF1',
        fontSize: 20,
        marginBottom: 10,

    }
})

export default SuggestionListLayout

