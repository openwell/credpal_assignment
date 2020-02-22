import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  // Image,
  Dimensions,
  Text,
  TextInput
} from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';
// import runTiming from './runTiming';
const { width, height } = Dimensions.get('window');

const {
  Value,
  startClock,
  stopClock,
  debug,
  block,
  cond,
  clockRunning,
  set,
  timing,
  eq,
  Clock,
  event,
  interpolate,
  Extrapolate,
  concat
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}
export default class App extends Component {
  buttonOpacity = new Value(1);
  onStateChange = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
          )
        ])
    }
  ]);
  onCloseState = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
          )
        ])
    }
  ]);

  // only when the first instruction is true will the next block run
  buttonY = interpolate(this.buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP
  });
  bgY = interpolate(this.buttonOpacity, {
    inputRange: [0, 1],
    // when opacity is 1 it remain in view and other -height
    outputRange: [-height / 3 - 50, 0],
    extrapolate: Extrapolate.CLAMP
  });
  textInputZIndex = interpolate(this.buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP
  });
  textInputOpacity = interpolate(this.buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  });
  textInputY = interpolate(this.buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [0, 100],
    extrapolate: Extrapolate.CLAMP
  });
  rotateCross = interpolate(this.buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [180, 360],
    extrapolate: Extrapolate.CLAMP
  });
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end'
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }]
          }}
        >
          <Svg height={height + 50} width={width}>
            <ClipPath id="clip">
              <Circle r={height + 50} cx={width / 2} />
            </ClipPath>
            <Image
              // style={{ flex: 1, width: null, height: null }}
              width={width}
              height={height + 50}
              href={require('../../assets/bg.jpg')}
              preserveAspectRatio="xMidYMis slice"
              clipPath="url(#clip)"
            />
          </Svg>
        </Animated.View>
        <View style={{ height: height / 3 }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
          <Animated.View
            style={{
              ...styles.button,
              backgroundColor: '#2E71DC',
              opacity: this.buttonOpacity,
              transform: [{ translateY: this.buttonY }]
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              SIGN IN WITH FACEBOOK
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              height: height / 3,
              ...StyleSheet.absoluteFill,
              top: null,
              justifyContent: 'center',
              zIndex: this.textInputZIndex,
              opacity: this.textInputOpacity,
              transform: [{ translateY: this.textInputY }]
            }}
          >
            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>
                <Animated.Text
                  style={{
                    transform: [{ rotate: concat(this.rotateCross, 'deg') }],
                    fontSize: 15
                  }}
                >
                  X
                </Animated.Text>
              </Animated.View>
            </TapGestureHandler>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="black"
              placeholder="EMAIL"
            ></TextInput>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="black"
              placeholder="PASSWORD"
            ></TextInput>
            <Animated.View
              style={{
                ...styles.button
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  closeButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: width / 2 - 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginVertical: 5,
    paddingLeft: 10,
    marginLeft: 10,
    borderColor: 'rgba(0,0,0,0.2)'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2
  }
});
