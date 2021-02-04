import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Contact from '../settings/Contact'

const Screen3 = () => {
  return (
    <View style={styles.View}>
      <Contact />
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
