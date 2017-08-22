import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ToastAndroid,
    BackHandler,
    Dimensions
} from 'react-native';
import Common from '../common/Common';
import Service from '../common/Service';
import SearchBar from './../common/SearchBar';
import BookItem from './BookItem';

export default class BookList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            keyWords: '么么哒',
            dataSource: [],
            count: 0
        }
    }
    _getData = () => {
        // 发起数据请求，开启loading
        this.setState({
            show: false
        })
        // 请求数据
        var url = Service.book_search + `?count=` + this.state.count + `&q=` + this.state.keyWords
        // this.list.scrollToOffset = {x:0,y:0}
        //  alert(url)
        Common.getRequest(url, (data) => {
            // 请求成功的回调函数
            // {"count": 13,"start": 0,"total": 13,"books": []}
            // 如果books不存在或者是长度为0
            if (!data.books || data.books.length == 0) {
                ToastAndroid.show('未找到相关书籍', ToastAndroid.SHORT)
            }
            this.setState({
                show: true,
                dataSource: data.books
            })
        }, (error) => {
            // 请求失败的回调函数
            alert(error)
        })
    }
    _changeText = (text) => {
        this.setState({
            keyWords: text
        })
    }
    _searchText = () => {
        this.state.dataSource = '',
            this.state.count = 10,
            this._getData()
    }
    _renderItem = ({ item }) => {
        const { navigate } = this.props.navigation;
        return <BookItem book={item} onPress={() => navigate('BookDetail', { bookId: item.id })} />
    }
    _onEndReached = () => {
        this.setState({
            count: this.state.count + 10
        })
        this._getData()
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this._BackAndroid)
    }
    componentWillUnmount() {
        BackHandler.addEventListener('hardwareBackPress', this._BackAndroid)
    }

    _BackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            BackHandler.exitApp();
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true  // 取消默认行为
    }

    render() {
        return (
            <View>
                <SearchBar
                    placeholder='请输入图书名字'
                    onChangeText={this._changeText}
                    onPress={this._searchText}
                />
                <FlatList
                    style={{height:Dimensions.get('window').height - 140}}
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index}
                    onEndReachedThreshold={0.01}
                    onEndReached={this._onEndReached}
                />
            </View>
        )
    }
    componentDidMount() {
        this._getData();
    }
}
