import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  Button,
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity
} from 'react-native';
import { Container, Text } from 'native-base';
import { background } from '../constants/images';

const { width, height } = Dimensions.get('window');
export default class Welcome extends Component {
  componentDidMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }
  renderDots() {
    return (
      <View
        style={{ margin: 10, flexDirection: 'row', justifyContent: 'center' }}
      >
        <View
          style={{
            backgroundColor: '#919BA0',
            margin: 5,
            borderWidth: 1,
            borderColor: 'transparent',
            borderRadius: 5,
            width: 7,
            height: 7
          }}
        />
        <View
          style={{
            backgroundColor: '#919BA0',
            borderColor: 'transparent',
            margin: 5,
            borderWidth: 1,
            borderRadius: 5,
            width: 7,
            height: 7
          }}
        />
        <View
          style={{
            backgroundColor: '#919BA0',
            borderColor: 'transparent',
            margin: 5,
            borderWidth: 1,
            borderRadius: 5,
            width: 7,
            height: 7
          }}
        />
      </View>
    );
  }
  render() {
    const scrollData = [
      { id: '2', text: '2', img: background.privacy },
      { id: '1', text: '1', img: background.welcome },
      { id: '3', text: '4', img: background.encrypted }
    ];
    const { navigate } = this.props.navigation;
    //style={{ alignItems: 'flex-end' }}
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 20 }}>
            <ScrollView
              horizontal
              pagingEnabled
              scrollEnabled
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
            >
              {scrollData.map(elem => (
                <View
                  key={elem.id}
                  style={{
                    width: width,
                    height: 400,
                    marginTop: 20,
                    padding: 20
                    // flex: 1
                    // alignItems: 'center'
                  }}
                >
                  <Image
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'center'
                    }}
                    source={elem.img}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>
              Secured, forever
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: '#95a5a6',
                fontSize: 14,
                marginHorizontal: 30
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              dolore aperiam veniam eaque voluptatibus consequatur, quas maiores
              culpa nobis vitae.
            </Text>
            {this.renderDots()}
            <TouchableOpacity
              onPress={() => navigate('VPN')}
              style={{
                marginHorizontal: 100,
                marginTop: 10,
                backgroundColor: '#3498db',
                borderRadius: 10,
                padding: 10
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
// #2980b9
const styles = StyleSheet.create({});
