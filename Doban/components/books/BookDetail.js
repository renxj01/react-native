import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
    BackHandler
} from 'react-native';
import Common from '../common/Common';
import Service from '../common/Service';
import Header from './../common/Header';

export default class BookDetail extends Component {
    static navigationOptions = {
        // title:'引导页'
        header: () => null
    }
    constructor(props) {
        super(props)

        this.state = {
            bookData: null //图书详情
        }
    }

    _getData() {
        var url = Service.book_detial_id + this.props.navigation.state.params.bookId;
        Common.getRequest(url, (data) => {
            this.setState({
                bookData: data
            })
        }, (error) => {
            alert(error)
        })
    }
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
            <View style={styles.container}>
                {
                    this.state.bookData ?
                        <View>
                            <Header
                                navigation={navigation}
                                title={this.state.bookData.title}
                            />
                            <ScrollView>
                                {/*图书简介*/}
                                <View>
                                    <Text style={styles.title}>图书简介</Text>
                                    <Text style={styles.text}>{this.state.bookData.summary}</Text>
                                </View>
                                {/*作者简介*/}
                                <View>
                                    <Text style={styles.title}>作者简介</Text>
                                    <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                                </View>
                            </ScrollView>
                        </View>
                    : Common.loading
                }
            </View>
        );
    }

    componentDidMount() {
        this._getData()
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 16,
        marginVertical: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    text: {
        marginHorizontal: 10,
        color: '#000'
    }
})