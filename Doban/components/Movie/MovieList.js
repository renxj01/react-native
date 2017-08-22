import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ToastAndroid,
    Dimensions
} from 'react-native';
import Common from './../common/Common';
import Service from './../common/Service';
import SearchBar from './../common/SearchBar';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            keyWords: '冰河',
            dataSource: [],
            count: 20
        }
    }

    _getData = () => {
        // 发起数据请求，开启loading
        this.setState({
            show: false
        })
        // 请求数据
        var url = Service.movie_search + `?count=` + this.state.count + `&q=` + this.state.keyWords
        // this.list.scrollToOffset = {x:0,y:0}
        //   alert(url)
        Common.getRequest(url, (data) => {
            // 请求成功的回调函数
            // {"count": 13,"start": 0,"total": 13,"books": []}
            // 如果books不存在或者是长度为0
            if (!data.subjects || data.subjects.length == 0) {
                ToastAndroid.show('未找到相关书籍', ToastAndroid.SHORT)
            }
            this.setState({
                show: true,
                dataSource: data.subjects
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
        return <MovieItem movie={item} 
                    onPress={ ()=>navigate('MovieDetail',{
                        url:item.alt,
                        title:item.title
                    })} 
                />     
    }

    _onEndReached = () => {
        this.setState({
            count: this.state.count + 10
        })
        this._getData()
    }

    render() {
        return (
            <View>
                <SearchBar
                    placeholder='请输入电影名字'
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
        this._getData()
    }
    
}

