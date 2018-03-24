import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function People(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textDisplay}>{props.person.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    borderRadius: 3,
    marginBottom: 20,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  textDisplay: {
    color: "white",
    fontSize: 18
  }
});
