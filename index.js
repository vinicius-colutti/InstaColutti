import React from 'react'
import {Provider} from 'react-redux'
import storeConfig from './src/store/storeConfig'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import axios from 'axios'

axios.defaults.baseURL = 'https://insta-fe5d5.firebaseio.com/'

const store = storeConfig()
const Redux = () =>(
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
