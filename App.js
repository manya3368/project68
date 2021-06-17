
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import fb from "./Screens/fb"
import insta from "./Screens/insta"
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
}}
var TabNavigator=createBottomTabNavigator
({
  facebook:fb,
  instagram:insta
})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
