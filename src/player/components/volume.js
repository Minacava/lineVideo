import React from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

function Volume(props) {
    return (
        <View>
            <TouchableHighlight
                onPress={props.onPress}
                style={styles.container}
            >
                {props.muted ? (<Icon name="volume-off" size={20} color={"white"} />)
                    :
                    (props.volume === .5 ?
                        (<Icon name="volume-down" color={"white"} size={10} />)
                        :
                        (<Icon name="volume-up" color={"white"} size={10} />))
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
        marginHorizontal: 20,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EE0039',
        backgroundColor: 'transparent'
    },
    button: {
        color: "#EE0039",
        fontSize: 10,
        fontWeight: "bold"
    }
})

export default Volume;