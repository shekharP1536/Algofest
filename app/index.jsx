import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const index = () => {
  return (
    <View style={styles.container}>
      <Text className="text-3xl font-poppinsThin">index</Text>
      <Link href="/about" Style={{color : 'blue'}}>Go To about section</Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container :  {
    flex : 1,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
  }
});
export default index