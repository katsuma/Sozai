import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicator,
} from 'react-native';
import SozaiStyle, { styles } from '../Style/SozaiStyle'

export default class SozaiList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    var API_SOZAI_URL = "https://sozai.katsuma.tv/api/sozais.json?v=" + Date.now();

    fetch(API_SOZAI_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        isLoaded: true,
        dataSource: this.state.dataSource.cloneWithRows(responseData)
      });
    })
    .done();
  }

  render() {
    if(!this.state.isLoaded) {
      return this._renderLoadingMessage();

    } else {
      return this._renderList();
    }
  }

  _renderList() {
    return (
      <View style={styles.sozai}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderEntry}
        />
      </View>
    );
  }

  _renderLoadingMessage() {
    return(
      <View style={styles.activityIndicator}>
        <ActivityIndicator
          animating={true}
          style={[styles.center, { height: 80 }]}
          size="large"
        />
        <View>
          <Text style={styles.loadingMessage}>Loading...</Text>
        </View>

      </View>
    );
  }

  renderEntry(entry) {
    return (
      <TouchableHighlight>
        <View>
          <View style={styles.container}>
            <Image source={{uri: entry.image}} style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{entry.title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}

//module.exports = SozaiList;
