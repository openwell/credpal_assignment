import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Button,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { servers } from '../constants/server';
import { icons } from '../constants/images';
const { width, height } = Dimensions.get('window');
export default class VPN extends Component {
  state = {
    connected: false,
    server: null,
    show: false,
    automatic: {
      name: 'Automatic',
      icons: icons.automatic
    }
  };
  componentWillUnmount() {
    this.setState({ show: false });
  }
  handleConnect = () => {
    this.setState(prev => ({ ...prev, connected: !prev.connected }));
  };
  handleServer = server => {
    this.setState({ server, connected: false, show: false });
  };

  renderServers() {
    const { show, server, automatic } = this.state;
    const connection = server || automatic;
    return (
      <Modal visible={show} animationType="fade" transparent>
        <TouchableWithoutFeedback
          onPressOut={() => this.setState({ show: false })}
        >
          <View style={styles.overLay} />
        </TouchableWithoutFeedback>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: height / 2,
            padding: 10
          }}
        >
          <Text style={{ textAlign: 'center' }}>Pick Server</Text>
          <ScrollView>
            {servers.map((elem, index) => {
              const isConnected = connection.name === elem.name;
              const isChecked = icons[isConnected ? 'checked' : 'unchecked'];
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.handleServer(elem)}
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <View
                    style={{
                      paddingLeft: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Image source={elem.icons} />
                    <Text style={{ padding: 10 }}>{elem.name}</Text>
                  </View>
                  <Image source={isChecked} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    );
  }
  renderServer() {
    const { server, automatic } = this.state;
    const connection = server || automatic;
    return (
      <View
        style={{
          height: 60,
          backgroundColor: '#2ecc71'
        }}
      >
        <TouchableOpacity
          onPress={() => this.setState({ show: true })}
          style={{
            // marginTop: 10,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image source={connection.icons} />
          <Text
            style={{
              fontWeight: '700',
              fontSize: 15,
              color: 'white',
              textAlign: 'center',
              padding: 10
            }}
          >
            {connection.name}
          </Text>
          <Image source={icons.dropdown} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* Section 1 */}
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.vpnHeader}>VPN</Text>
            </View>
            {/* Section 2 */}
            <View>
              <View style={styles.displayConnection}>
                <Text style={{ color: 'black', textAlign: 'center' }}>
                  {this.state.connected ? 'Connected' : 'Disconnected'}
                </Text>
              </View>
              <View style={styles.connectionImage}>
                <Image
                  source={this.state.connected ? icons.online : icons.offline}
                />
              </View>

              <TouchableOpacity
                style={[
                  styles.connectButton,
                  this.state.connected ? styles.redConnectButton : ''
                ]}
              >
                <Text
                  onPress={this.handleConnect}
                  style={[styles.connectButtonText]}
                >
                  {this.state.connected ? 'DISCONNECT NOW' : 'CONNECT NOW'}
                </Text>
              </TouchableOpacity>
            </View>
            {/* Section 3 */}
            {/* Modal */}
          </View>
          <View>{this.renderServer()}</View>
          <View>{this.renderServers()}</View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  overLay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.185)'
  },
  vpnHeader: {
    fontSize: 40,
    fontWeight: '600',
    padding: 20,
    textAlign: 'center',
    marginBottom: 50
  },
  connectionImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20
  },
  displayConnection: {
    marginHorizontal: 100,
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  connectButton: {
    marginHorizontal: 100,
    marginTop: 10,
    backgroundColor: '#2980b9',
    borderRadius: 10,
    padding: 20
  },
  connectButtonText: {
    fontWeight: '700',
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
  },
  redConnectButton: {
    backgroundColor: '#e74c3c'
  }
});
