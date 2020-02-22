import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
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
  concat,
  defined,
  spring
} = Animated;

function runSpring(clock, value, velocity, dest) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0)
  };

  const config = {
    damping: 7,
    mass: 1,
    stiffness: 121.6,
    overshootClamping: false,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
    toValue: new Value(0)
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.velocity, velocity),
      set(state.position, value),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    spring(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position
  ];
}
export default class App extends Component {
  //   translateX = new Animated.Value(0);
  dragX = new Value(0);
  state = new Value(-1);
  dragVX = new Value(0);
  clock = new Clock();
  onGestureEvent = Animated.event([
    {
      nativeEvent: {
        translationX: this.dragX,
        velocityX: this.dragX,
        state: this.state
      }
    }
  ]);
  transX = new Value();
  translateX = cond(
    eq(this.state, State.ACTIVE),
    [stopClock(this.clock), set(this.transX, this.dragX), this.transX],
    // when u perform the sprint return back to transX
    // [set(this.transX, 0), this.transX]
    [
      set(
        this.transX,
        cond(
          defined(this.transX),
          runSpring(this.clock, this.transX, this.dragVX, 0),
          0
        )
      )
    ]
  );

  render() {
    return (
      <View style={styles.container}>
        <PanGestureHandler
          onGestureEvent={this.onGestureEvent}
          onHandlerStateChange={this.onGestureEvent}
        >
          <Animated.View
            style={[
              styles.box,
              {
                transform: [{ translateX: this.translateX }]
              }
            ]}
          ></Animated.View>
        </PanGestureHandler>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }
});

// translateX = new Animated.Value(0);
// onGestureEvent = Animated.event(
//   [
//     {
//       nativeEvent: {
//         translationX: this.translateX
//       }
//     }
//   ],
//   { useNativeDriver: true }
// );
// onHandlerStateChange = event => {
//   if (event.nativeEvent.oldState === State.ACTIVE) {
//     Animated.timing(this.translateX, {
//       toValue: 0,
//       duration: 5000,
//       useNativeDriver: true
//     }).start();
//   }
// };
