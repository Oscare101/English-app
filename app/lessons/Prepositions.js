import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from './S'
import color from '../components/color'

const PrepositionTo = {
  Belong: 'That bag belong to me',
  'Look forward': 'I am looking forward to my holliday',
  Prefer: 'I prefer taking the train to flying',
  Rude: "Don't be rude to him",
  Kind: 'They were very kind to me',
  Close: 'Very close to where we passed',
  Married: "You're married to someone?",
  Refer: 'That must refer to the creatures we saw',
  Respond: 'Computer should respond to keyboard input',
  Expect: "They can't actually expect to win",
  Attend: 'I shall attend to the matter, sir',
  Similar: 'Our situation is similar to theirs',
  Opposed: 'They were therefore opposed to the proposal',
  According: 'And according to this report filed two days ago...',
  Attitude: 'You know, my attitude to money is...',
}
const PrepositionFor = {
  Apologize: 'He appologized for being late',
  Pay: "I'll pay for it",
}

const Hint = (props) => {
  return <Text style={[S.text, styles.textHint]}>{props.t}</Text>
}

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Dependent Prepositions</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.title}>
            <Text style={S.h2}>To</Text>
          </View>
          <View style={styles.block}>
            <Text style={S.text}>
              That bag <Text style={{ color: 'blue' }}>belong to </Text>
              me
            </Text>
            <Text style={S.text}>
              I am <Hint t="looking forward to" /> my holliday
            </Text>
          </View>
        </View>

        <View style={{ padding: 10 }}></View>
      </ScrollView>
    </View>
  )
}

const Prepositions = () => {
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
          <Text style={S.firstTitle}>Dependent Prepositions</Text>
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
  title: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.examplesTitle,
  },
  block: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: color.examplesText,
  },
  hint: {
    backgroundColor: color.exampleHint,
    borderRadius: 7,
    alignSelf: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textHint: {
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 0 },
    textShadowRadius: 10,
    color: 'white',
  },
})

export default Prepositions
