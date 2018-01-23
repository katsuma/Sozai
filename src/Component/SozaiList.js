import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  Share,
} from 'react-native';

import SozaiStyle, { styles } from '../Style/SozaiStyle';
import SozaiDetail from './SozaiDetail';

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

  _onForward(entry) {
    this.props.navigator.push({
      title: entry.title,
      component: SozaiDetail,
      passProps: { url: entry.image },
      rightButtonTitle: 'Share',
      onRightButtonPress: () => this._onShareButton(entry.image),
    });
  }

  _onShareButton(url) {
    Share.share({url});
  }

  _renderList() {
    return (
      <View style={styles.sozai}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderEntry.bind(this)}
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
      <TouchableHighlight onPress={() => this._onForward(entry)}>
        <View>
          <View style={styles.container}>
            <Image source={{uri: entry.thumbnail}} style={styles.thumbnail}/>
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
