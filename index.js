/**
 * @format
 */
import React from 'react';
import {Provider} from 'react-redux';
import storeConfig from './src/redux/storeConfig';
import {AppRegistry} from 'react-native';
import Navigator from './src/Navigator';
import {name as appName} from './app.json';

const store = storeConfig();
const Redux = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
