import React from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import Iconf from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

function FullScreen(props) {
    return (
        <View>
            <TouchableHighlight
                onPress={props.onPress}
                style={styles.container}
            >
                {
                    props.fullScreen ? <Iconf name="compress" color="white" size={20} /> : <Icon name="md-expand" size={20} color="white" />
                }
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 30,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EE0039',
        backgroundColor: 'transparent'

    }
})
export default FullScreen;