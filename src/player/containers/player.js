import React, { Component } from 'react';
import Video from 'react-native-video';
import {
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import Layout from '../components/layout';

class Player extends Component {
    state = {
        loading: true
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }
    onLoad = () => {
        this.setState({
            loading: false
        })
    }
    render() {
        return (
            <Layout
                loading={this.state.loading}
                video={
                    <Video
                        source={require('../../../assets/TRAFFIK-cover-trailer.mp4')}
                        rate={1.0}
                        volume={2.0}
                        muted={true}
                        resizeMode="cover"
                        style={styles.video}
                        ref={(ref) => {
                            this.player = ref
                            console.log(this.player)
                        }}
                        repeat={false}
                        ignoreSilentSwitch={'ignore'}
                        onEnd={this.End}
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                    />
                }
                loader={
                    <ActivityIndicator color='white' size="large" />
                }
            />
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