import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  TextInput,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from '../lessons/S'
import color from '../components/color'

const Test = () => {
  const [disableTest, setDisableTest] = useState(false)

  let a = '1'
  let b = '2'
  let c = '3'
  let d = '4'
  let answer = '2'
  let choice
  const Choise = () => {
    // setDisableTest(!disableTest)
    if (choice === answer) {
      console.log('yes')
    } else {
      console.log('no')
    }
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          choice = a
          Choise(choice)
        }}
        style={styles.input}
        disabled={disableTest}
      >
        <Text>{a}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disableTest}
        onPress={() => {
          choice = b
          Choise(choice)
        }}
        style={styles.input}
      >
        <Text>{b}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disableTest}
        onPress={() => {
          choice = c
          Choise(choice)
        }}
        style={styles.input}
      >
        <Text>{c}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disableTest}
        onPress={() => {
          choice = d
          Choise(choice)
        }}
        style={styles.input}
      >
        <Text>{d}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    borderBottomWidth: 2,
    padding: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: color.headerLessonColor,
    borderRadius: 5,
    width: 80,
    padding: 5,
    margin: 5,
  },
  inputBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  out: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 5,
  },
})

export default Test
