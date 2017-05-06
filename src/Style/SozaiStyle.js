'use strict';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sozai: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10
  },

  fullscreen: {
    flex: 1,
    resizeMode: 'cover',
  },

  rightContainer: {
    flex: 1
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },

  title: {
    fontSize: 16,
    marginBottom: 8
  },

  separator: {
    height: 1,
    backgroundColor: '#DDDDDD',
  },

  listView: {
    backgroundColor: '#FFFFFF'
  },

  activityIndicator: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160,
  },

  loadingMessage: {
    flex: 1,
    fontSize: 20,
    color: '#656565',
  }
});
