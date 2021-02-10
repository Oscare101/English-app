import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Very from '../lessons/Very'
import PresentPerfectContinuous from '../lessons/PresentPerfectContinuous'
import PresentPerfect from '../lessons/PresentPerfect'
import S from '../lessons/S'
import Header from './Header'
import Page from './Page'
import color from './color'
import PastSimple from '../lessons/PastSimple'
import PastContinuous from '../lessons/PastContinuous'
import PresentContinuous from '../lessons/PresentContinuous'
import PresentSimple from '../lessons/PresentSimple'
import Prepositions from '../lessons/Prepositions'

const { width } = Dimensions.get('screen')
const Screen1 = () => {
  return (
    <View style={S.View}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={S.blockList}>
          <Page title="times" />
          <PastSimple />
          <PastContinuous />

          <PresentSimple />
          <PresentContinuous />

          <PresentPerfect />
          <PresentPerfectContinuous />

          <Page title="cheat sheets" />
          <Prepositions />
          <Very />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Screen1
