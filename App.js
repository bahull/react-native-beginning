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

import TabView from "react-native-scrollable-tab-view";

import Todo from "./src/Todo";
// import Fancy from "./src/Fancy";
import Starwars from "./src/Starwars";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabView tabBarPosition="bottom">
          <Todo tabLabel="Todos" />
          <Starwars tabLabel="Starwars" />
        </TabView>
      </Provider>
    );
  }
}
