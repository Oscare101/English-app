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

let inputText = ''
let inputTarget = 'two'

const Submit = () => {
  console.log(inputText)
  if (inputText === inputTarget) {
    console.log('yes')
  } else {
    console.log('no')
  }
}
const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Practice Times</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <View style={{ padding: 10 }}>
          <Text>Enter {inputTarget}</Text>
          <View style={styles.inputBlock}>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={(text) => (inputText = text)}
              onSubmitEditing={Submit}
            />
            <TouchableOpacity onPress={Submit}>
              <Ionicons
                name="checkbox"
                size={50}
                color={color.headerLessonColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const PracticeTimes = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [like, setLike] = useState(false)
  const [repeat, setRepeat] = useState(false)

  let logoLike, colorRepeat
  if (like) {
    logoLike = 'heart'
  } else {
    logoLike = 'heart-outline'
  }
  if (repeat) {
    colorRepeat = 'red'
  } else {
    colorRepeat = 'black'
  }
  return (
    <View>
      <Modal visible={modalVisible} animationType="slide">
        <Lesson />
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={S.close}
        >
          <Ionicons name="close-outline" size={40} color={'white'} />
        </TouchableOpacity>
      </Modal>
      <View style={S.block}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={S.blockLesson}
        >
          <Text style={S.firstTitle}>Practice Times</Text>
        </TouchableOpacity>
        <View style={S.like}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <Ionicons name={logoLike} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRepeat(!repeat)}>
            <Ionicons name="repeat-outline" size={30} color={colorRepeat} />
          </TouchableOpacity>
        </View>
      </View>
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
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    padding: 5,
  },
  inputBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PracticeTimes