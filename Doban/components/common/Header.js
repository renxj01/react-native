import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Button style={styles.headerBtn} title='返回' onPress={() => this.props.navigation.goBack()} />
                <Text
                    style={styles.headerText}
                    numberOfLines={1}
                >{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        alignItems: 'center',
        borderColor: '#000'
    },
    headerBtn: {
        width: 60,
        height: 30
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        color: 'red',
        marginLeft: 10
    },
})