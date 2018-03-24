import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import People from "./People";

export default class Starwars extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    fetch("https://www.swapi.co/api/people", { Accept: "application/json" })
      .then(res => res.json())
      .then(data => this.setState({ people: data.results }));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Star Wars Characters</Text>
        {this.state.people.length > 0 &&
          this.state.people.map((curr, ind) => (
            <People person={curr} key={ind} />
          ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#63a0a1",
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    marginBottom: 60,
    marginTop: 30
  }
});
