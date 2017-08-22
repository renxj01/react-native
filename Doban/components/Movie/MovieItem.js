import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class MovieItem extends Component {

    render() {
        let movie = this.props.movie;
        let actors = [];
        for (var i in movie.casts) {
            actors.push(movie.casts[i].name)
        }
        return (
            <TouchableOpacity style={styles.container} {...this.props}>
                {/*电影*/}
                <View style={styles.imgContainer} >
                    <Image style={styles.img} source={{ uri: movie.images.medium }} />
                </View>
                {/*电影文字信息*/}
                <View style={styles.contentContainer}>
                    {/*title*/}
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1}>{movie.title}</Text>
                    </View>
                    {/*演员*/}
                    <View style={styles.textContainer}>
                        <Text>{actors}</Text>
                    </View>
                    {/*上映时间*/}
                    <View style={styles.textContainer}>
                        <Text>{movie.year}</Text>
                    </View>
                    {/* 类型 评分 */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.price}>{movie.genres}</Text>
                        <Text style={styles.pages}>{movie.rating.average}分</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 120,
        padding: 10
    },
    imaContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 80,
        height: 100
    },
    contentContainer: {
        flex: 1,
        marginLeft: 20
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    publish_author: {
        color: '#3a3a3a',
        fontSize: 13
    },
    price: {
        color: 'skyblue',
        fontSize: 16
    },
    pages: {
        marginLeft: 10,
        color: 'red'
    }
})