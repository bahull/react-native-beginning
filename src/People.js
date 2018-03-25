import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
const { width, height } = Dimensions.get("window");
export default function People(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.textDisplay}>{props.person.name}</Text>
      <TouchableOpacity
        onPress={e => props.addPerson()}
        value={props.person.name}
        key={props.person}
        data-type={props.person}
      >
        <Text style={styles.textRight}>Ally</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textRightBottom}>Foe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: height / 10,
    borderRadius: 3,
    marginBottom: 20,
    backgroundColor: "gray",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  textDisplay: {
    color: "white",
    fontSize: 18,
    justifyContent: "flex-start"
  },
  textRight: {
    position: "absolute",
    right: -300,
    top: -10
  },
  textRightBottom: {
    position: "absolute",
    right: -300,
    top: 10
  }
});
