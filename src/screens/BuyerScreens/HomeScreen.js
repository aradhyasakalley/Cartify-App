import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style ={styles.main}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text:{
    color:'black'
  },
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})