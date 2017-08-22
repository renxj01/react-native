import React, { Component } from 'react';
import {
    View,
    Text,
    WebView,
    BackHandler
} from 'react-native';
import Header from './../common/Header'

export default class MovieDetail extends Component {
     componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this._BackAndroid)
    }
    componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', this._BackAndroid)
    }

    _BackAndroid = () => {
        this.props.navigation.goBack()
        return true  // 取消默认行为
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header 
                    navigation = {navigation}
                    title = {navigation.state.params.title}
                />
                <WebView
                    startInLoadingState = {true}
                    source={{ uri: navigation.state.params.url }}
                />
            </View>
        );
    }
}

