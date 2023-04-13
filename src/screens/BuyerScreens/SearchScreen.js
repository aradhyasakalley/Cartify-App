import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <View style ={styles.main}>
      <Text style={styles.text}>Search</Text>
    </View>
  )
}

export default SearchScreen

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