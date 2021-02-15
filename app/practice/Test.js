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
  const [test, setTest] = useState(false)

  let colorIcon
  let a = "hasn't started yet"
  let b = 'has already started'
  let c = 'is starting'
  let d = 'was started'
  let answer = 'has already started'
  let choice

  const Choise = () => {
    setDisableTest(true)
    if (choice === answer) {
      setTest(true)
    } else {
      setTest(false)
    }
  }

  let colorTest

  if (disableTest) {
    colorTest = 'grey'
  } else {
    colorTest = color.headerLessonColor
  }

  if (test) {
    colorIcon = 'green'
  } else {
    colorIcon = 'red'
  }

  return (
    <View>
      <Text>Oh no! We're late! The film ______</Text>
      <TouchableOpacity
        onPress={() => {
          choice = a
          Choise(choice)
        }}
        style={[
          styles.input,
          {
            borderColor: colorTest,
          },
        ]}
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
        style={[
          styles.input,
          {
            borderColor: colorTest,
          },
        ]}
      >
        <Text>{b}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disableTest}
        onPress={() => {
          choice = c
          Choise(choice)
        }}
        style={[
          styles.input,
          {
            borderColor: colorTest,
          },
        ]}
      >
        <Text>{c}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disableTest}
        onPress={() => {
          choice = d
          Choise(choice)
        }}
        style={[
          styles.input,
          {
            borderColor: colorTest,
          },
        ]}
      >
        <Text>{d}</Text>
      </TouchableOpacity>
      <Ionicons name="rocket" color={colorIcon} size={60} />
      <TouchableOpacity
        onPress={() => {
          setDisableTest(false)
        }}
        style={styles.input}
      >
        <Text>repeat</Text>
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
    borderRadius: 5,
    alignItems: 'center',
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
