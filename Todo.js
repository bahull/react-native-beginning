import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button
} from "react-native";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  handleChange(e) {
    this.setState({ newTodo: e });
  }
  submitTodo() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos: todos, newTodo: "" });
  }
  deleteTodo(ind) {
    const todos = [
      ...this.state.todos.slice(0, ind),
      ...this.state.todos.slice(ind + 1)
    ];
    this.setState({ todos });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Your dreaded to do list</Text>
        <TextInput
          style={styles.textWidth}
          value={this.state.newTodo}
          onChangeText={this.handleChange}
        />
        <Button onPress={this.submitTodo} title="Add a Todo" />
        {this.state.todos.map((todo, ind) => {
          return (
            <View key={ind}>
              <Text>{todo}</Text>
              <Button title="string" onPress={() => this.deleteTodo(ind)} />
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textWidth: {
    width: "30%"
  }
});
