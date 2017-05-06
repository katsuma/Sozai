import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import SozaiStyle, { styles } from '../Style/SozaiStyle'

export default class SozaiDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      networkActivityIndicatorVisible: false,
    };
  }

  _onChangeNetworkIndicatorVisible() {
    this.setState({
      networkActivityIndicatorVisible: !this.state.networkActivityIndicatorVisible,
    });
  };

  render() {
    return (
      <View style={{alignItems: 'stretch', flex: 1}}>
        <StatusBar
          networkActivityIndicatorVisible={this.state.networkActivityIndicatorVisible}
        />
        <Image
          style={{flex: 1, resizeMode: 'contain'}}
          source={{uri: this.props.url}}
          onLoadStart={() => this._onChangeNetworkIndicatorVisible()}
          onLoadEnd={() => this._onChangeNetworkIndicatorVisible()}
        />
      </View>
    );
  }
}
