import React from 'react';
import {
    StyleSheet,
    ProgressBarAndroid
} from 'react-native';

function ProgressBar(props) {
    return (
        <ProgressBarAndroid
            color="red"
            indeterminate={false}
            styleAttr="Horizontal"
            progress={props.progress}
            style={styles.progressBarAndroid} />
    )
}
const styles = StyleSheet.create({
    progressBarAndroid: {
        width: '30%',
        marginLeft: 10,
        marginRight: 20,
    }
})
export default ProgressBar;