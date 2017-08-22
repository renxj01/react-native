/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  ToastAndroid,
  BackHandler
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import BookList from './components/books/BookList';
import BookDetail from './components/books/BookDetail';
import TabBar from './components/tabBar/TabBar';
import MovieList from './components/Movie/MovieList';
import MovieDetail from './components/Movie/MovieDetail';

class LeadImg extends Component {
  static navigationOptions = {
    // title:'引导页'
    header: () => null
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image
        style={styles.image}
        source={require('./images/lead.png')}
      >
        <Button title="按钮" onPress={() => navigate('Home')} />
      </Image>
    );
  }
  componentDidMount() {
    // ToastAndroid.show('1S后进入主页', ToastAndroid.SHORT)
    const { navigate } = this.props.navigation;
    setTimeout(() => navigate('Home'), 1000)
  }
}

const Doban = StackNavigator({
  LeadImg: { screen: LeadImg },
  Home: { screen: TabBar },
  BookDetail: { screen: BookDetail },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: {
      header: () => null
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

AppRegistry.registerComponent('Doban', () => Doban);
