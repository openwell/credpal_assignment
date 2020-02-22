import React, { Component } from 'react';
import AppVpn from './navigation/app';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default class App extends Component {
  state = {
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <AppVpn />;
  }
}
const styles = StyleSheet.create({});
