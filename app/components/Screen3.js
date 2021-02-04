import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Contact from '../settings/Contact'
import Sources from '../settings/Sources'
import S from '../lessons/S'
import Header from './Header'
const { width } = Dimensions.get('screen')
const Screen3 = () => {
  return (
    <View style={styles.View}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 65, flex: 1, width }}>
          <Contact />
          <Sources />
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

export default Screen3
