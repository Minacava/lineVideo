import React from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text
} from "react-native";

function PlayPause(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.container}>
      {
        props.paused ?
          <Text style={styles.btnWhite}>PLAY</Text>
          :
          <Text style={styles.btn}>PAUSE</Text>
      }
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  btn: {
    color: "#EE0039",
    fontSize: 10,
    fontWeight: "bold"
  },
  btnWhite: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold"
  },
  container: {
    justifyContent: "center",
    paddingHorizontal: 10,
    height: 15,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#EE0039",
    backgroundColor: "black"
  }
});
export default PlayPause;
