import React, { Component } from 'react';
import { Image } from 'react-native';
import SozaiStyle, { styles } from '../Style/SozaiStyle'

export default class SozaiDetail extends Component {
  render() {
    return (
      <Image source={{uri: this.props.url}} style={styles.fullscreen}/>
    );
  }
}
