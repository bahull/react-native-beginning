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

import axios from "axios";

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
  componentDidMount() {
    axios
      .get("http://192.168.8.89:3001/getTodo")
      .then(resp => {
        this.setState({ todos: resp.data });
      })
      .catch(console.log);
  }

  submitTodo() {
    console.log("Hit");
    axios
      .post("http://192.168.8.89:3001/api/addTodo", {
        item: this.state.newTodo
      })
      .then(resp => {
        this.setState({ todos: resp.data, newTodo: "" });
      })
      .catch(console.log);
  }
  deleteTodo(current) {
    axios
      .delete(`http://localhost:3001/api/removeTodo/${current.id}`)
      .then(resp => {
        this.setState({ todos: resp.data });
      });
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
                <Text style={styles.todoText}>{todo.todo}</Text>
                <TouchableHighlight onPress={() => this.deleteTodo(todo)}>
                  <Text style={styles.todoText}>Completed</Text>
                </TouchableHighlight>
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
