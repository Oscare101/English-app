import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Screen3 = () => {
  return (
    <View style={styles.View}>
      <Text>Create</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
})

export default Screen3
