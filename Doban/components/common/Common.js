import React, { Component } from 'react';
import {
    ActivityIndicator,
    Dimensions
} from 'react-native'

const Common={
    // 数据请求
    getRequest:(url,successCallBack,fillCallBack)=>{
        fetch(url)
        .then((Response)=>Response.json())
        .then((responseDate)=>successCallBack(responseDate))
        .catch((error)=>fillCallBack(error))
    },
    //加载的页面
    loading: <ActivityIndicator
        size={'large'}
        color='red'
        style={{marginTop:Dimensions.get('window').height/3}}
    />
}

export default Common;