import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button,
  TouchableOpacity
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
        <View style={styles.flexed}>
          <TextInput
            style={styles.textWidth}
            value={this.state.newTodo}
            onChangeText={this.handleChange}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.submitTodo}>
              Make
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, ind) => {
            return (
              <View style={styles.todo} key={ind}>
                <Text style={styles.todoText}>{todo}</Text>
                <TouchableOpacity onPress={() => this.deleteTodo(ind)}>
                  <Text style={styles.todoText}>Completed</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "lightgrey",
    padding: 20
  },

  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    marginTop: 40
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textWidth: {
    width: "35%",
    backgroundColor: "rgba(190,190,190, 1)",
    borderRadius: 8,
    flex: 0.7,
    fontSize: 24
  },
  flexed: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderRadius: 3,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  todos: {
    marginTop: 60
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginBottom: 10
  },
  todoText: {
    fontSize: 24,
    margin: 5
  }
});
