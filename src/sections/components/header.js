import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Text,
} from 'react-native';

function Header(props) {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image
                        source={require('../../../assets/logoline.png')}
                        style={styles.logo} />
                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 1,
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    logo: {
        width: 50,
        height: 76,
        resizeMode: 'contain',
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    }
})

export default Header;