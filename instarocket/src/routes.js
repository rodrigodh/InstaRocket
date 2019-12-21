import React from 'react';
import {createAppContainer, createStackNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

//todas as rotas ficam a baixo da função a baixo
export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
        defaultNavigationOptions:  {
            headerTintColor: '#000',
            headerTitle: <Image style={{marginHorizontal: 20,}} source={logo} />,
            headerBackTitle: null,
        },
        mode: 'modal', 
    })
);



