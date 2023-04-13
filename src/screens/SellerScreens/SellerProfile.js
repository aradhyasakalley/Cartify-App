import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SellerProfile = () => {
  return (
    <View style ={styles.main}>
      <Text style={styles.text}>User profile</Text>
    </View>
  )
}

export default SellerProfile

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