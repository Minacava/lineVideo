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
        paddingVertical: 10,
        flex: 1,
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

export default SuggestionListLayout;

