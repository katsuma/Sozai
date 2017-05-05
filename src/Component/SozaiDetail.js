import React, { Component } from 'react';
import { View, Image } from 'react-native';
import SozaiStyle, { styles } from '../Style/SozaiStyle'

export default class SozaiDetail extends Component {
  render() {
    return (
      <View style={{alignItems: 'stretch', flex: 1}}>
        <Image style={{flex: 1, resizeMode: 'contain'}} source={{uri: this.props.url}} />
      </View>
    );
  }
}
