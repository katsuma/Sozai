import React, { Component } from 'react';
import { AppRegistry, View, NavigatorIOS } from 'react-native';

import SozaiList from './src/Component/SozaiList';
import SozaiStyle, { styles } from './src/Style/SozaiStyle'

class Sozai extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: SozaiList,
          title: 'Sozai',
        }}
        style={{flex: 1}}
      />
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('Sozai', () => Sozai);
