import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Header from './Header'
import S from '../lessons/S'
import color from './color'
const { width } = Dimensions.get('screen')
const Screen2 = () => {
  return (
    <View style={styles.View}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 65, flex: 1, width }}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.backgroundColor,
    flexDirection: 'column',
  },
})

export default Screen2
