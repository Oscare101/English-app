import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Very from '../lessons/Very'

const Screen1 = () => {
  return (
    <View style={styles.View}>
      <ScrollView>
        <View
          style={{ paddingBottom: 85, paddingTop: 30, width: '100%' }}
        ></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellowgreen',
    flexDirection: 'column',
  },
})

export default Screen1
