import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import SozaiList from './src/Component/SozaiList';
import SozaiStyle, { styles } from './src/Style/SozaiStyle'

class Sozai extends Component {
  render() {
    return (
      <View style={styles.sozai}>
        <SozaiList />
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('Sozai', () => Sozai);
