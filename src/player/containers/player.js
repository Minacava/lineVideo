import React, { Component } from 'react';
import Video from 'react-native-video';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/fullscreen';
import TimeLeft from '../components/timeleft';
import Volume from '../components/volume';

class Player extends Component {
  state = {
    loading: true,
    pause: false,
    fullScreen: false,
    progress: 0.0,
    duration: 0.00,
    currentTime: 0.00,
    volume: 0,
    muted: true
  }


  //ios - loader
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }
  //android - loader
  onLoad = (payload) => {
    this.setState({
      loading: false
    })
  }
  playPause = () => {
    this.setState(function (prevState) {
      return { pause: !prevState.pause }
    })
  }
  fullScreen = () => {
    this.setState(function (prevState) {
      return { fullScreen: !prevState.fullScreen }
    })
  }
  onFullScreen = () => {
    this.fullScreen();
    this.state.fullScreen ? this.video.dismissFullscreenPlayer() : this.video.presentFullscreenPlayer();
    this.fullScreen();
  }
  videoRef = (element) => {
    this.video = element;
  }


  onProgress = (playload) => {
    let currentTime = playload.currentTime / 60;
    let minutes = Math.floor(currentTime);
    let seconds = currentTime % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2);
    let duration = (playload.seekableDuration / 60).toFixed(2)
    this.setState({
      currentTime: time,
      progress: (playload.currentTime / playload.seekableDuration),
      duration: duration
    });
  }
  onVolume = () => {
    var volume = this.state.volume + 0.5
    var muted = this.state.muted
    if (volume > 1) {
      volume = 0
      muted = true
    } else {
      muted = false
    }
    this.setState({
      volume: volume,
      muted: muted
    })
  }

  render() {
    const id = this.props.yt_trailer_code
    console.log(this.props.yt_trailer_code)
    return (
      <Layout
        loading={this.state.loading}
        loader={<ActivityIndicator color="white" />}
        video={
          <Video
            muted={this.state.muted}
            source={{ uri: (`https://www.youtube.com/watch?v=${id}`) }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.pause}
            ref={this.videoRef}
            onProgress={this.onProgress}
            volume={this.state.volume}
          />
        }
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.pause} />
            <TimeLeft duration={this.state.duration} currentTime={this.state.currentTime} />
            <View style={styles.controlsRight}>
              <Volume
                onPress={this.onVolume}
                volume={this.state.volume}
                muted={this.state.muted}
              />
              <FullScreen fullScreen={this.state.fullScreen} onPress={this.onFullScreen} />
            </View>
          </ControlLayout>
        }
      />
    )
  }
}
const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  controlsRight: {
    flexDirection: 'row',
  }
})
export default Player