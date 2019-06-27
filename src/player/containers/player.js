import React, { Component } from 'react';
import Video from 'react-native-video';
import {
    StyleSheet
} from 'react-native';
import Layout from '../components/layout';


class Player extends Component {
    render() {
        return (
            <Layout
                video={
                    <Video
                        source={require('../../../assets/TRAFFIK-cover-trailer.mp4')}
                        rate={1.0}
                        volume={2.0}
                        muted={true}
                        resizeMode="cover"
                        style={styles.video}
                    />
                }
            >
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
})

export default Player;