/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

import { Provider } from "react-redux";
import store from "./src/store";

import Todo from "./src/Todo";
// import Fancy from "./src/Fancy";
// import Starwars from "./src/Starwars";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
