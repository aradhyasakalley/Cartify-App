import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCart = () => {
  return (
    <View style ={styles.main}>
      <Text style={styles.text}>Cart </Text>
    </View>
  )
}

export default UserCart

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