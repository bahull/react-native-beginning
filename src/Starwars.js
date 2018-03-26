import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import People from "./People";

export default class Starwars extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
    this.addFriendOrFoe = this.addFriendOrFoe.bind(this);
  }
  componentDidMount() {
    fetch("https://www.swapi.co/api/people", { Accept: "application/json" })
      .then(res => res.json())
      .then(data => this.setState({ people: data.results }));
  }

  addFriendOrFoe(e) {
    console.log(e);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Star Wars Manifest</Text>
        <ScrollView>
          {this.state.people.length > 0 &&
            this.state.people.map((curr, ind) => (
              <People person={curr} key={ind} addPerson={this.addFriendOrFoe} />
            ))}
        </ScrollView>
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
    marginBottom: 10,
    marginTop: 30
  }
});
