import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Very from '../lessons/Very'
import PresentPerfectContinuous from '../lessons/PresentPerfectContinuous'
import PresentPerfect from '../lessons/PresentPerfect'
import S from '../lessons/S'
import Header from './Header'
const { width } = Dimensions.get('screen')
const Screen1 = () => {
  return (
    <View style={styles.View}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 65, flex: 1, width }}>
          <Very />
          <PresentPerfect />
          <PresentPerfectContinuous />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    paddingTop: 30,
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellowgreen',
    flexDirection: 'column',
  },
})

export default Screen1
