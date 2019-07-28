import React, { Component } from "react";
import Video from "react-native-video";
import { StyleSheet, ActivityIndicator, Text } from "react-native";
import Layout from "../components/layout";
import PlayPause from "../components/play-pausa";
import ControlLayout from "../components/control-layout";


class Player extends Component {
  state = {
    loading: true,
    paused: false,
  };
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    });
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    });
  };
  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={require("../../../assets/TRAFFIK-cover-trailer.mp4")}
            rate={1.0}
            volume={2.0}
            muted={true}
            resizeMode="cover"
            style={styles.video}
            ref={ref => {
              this.player = ref;
            }}
            repeat={false}
            ignoreSilentSwitch={"ignore"}
            onEnd={this.End}
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={<ActivityIndicator color="white" />}
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <Text>Progress bar</Text>
            <Text>Time left</Text>
            <Text>Fullscreen</Text>
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

export default Player;
