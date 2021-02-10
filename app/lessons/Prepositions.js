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

const PrepositionTo = {
  Belong: 'That bag belong to me',
  'Look forward':
    'I am looking forward to my holliday looking forward to my holliday',
  Prefer: 'I prefer taking the train to flying',
  Rude: "Don't be rude to him",
}
const PrepositionFor = {}
const PrepositionIn = {}
const PrepositionAt = {}
const PrepositionWith = {}
const PrepositionAbout = {}
const PrepositionOn = {}
const PrepositionOf = {}

const ReturnRules = (name, title) => {
  {
    return Object.keys(name.name).map((list) => (
      <View
        style={{
          flexDirection: 'column',
        }}
      >
        <Text key={list} style={[S.text, { fontSize: 22 }]}>
          {list}:
        </Text>
        <Text key={name.name[list]} style={{ fontSize: 14, color: 'grey' }}>
          {name.name[list]}
        </Text>
      </View>
    ))
  }
}

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Dependent Prepositions</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={S.h2}>To:</Text>
          <ReturnRules name={PrepositionTo} title="To" />
          <Text style={S.h2}>For:</Text>
          <ReturnRules name={PrepositionFor} title="For" />
          <Text style={S.h2}>In:</Text>
          <ReturnRules name={PrepositionIn} title="In" />
          <Text style={S.h2}>At:</Text>
          <ReturnRules name={PrepositionAt} title="At" />
          <Text style={S.h2}>With:</Text>
          <ReturnRules name={PrepositionWith} title="With" />
          <Text style={S.h2}>About:</Text>
          <ReturnRules name={PrepositionAbout} title="About" />
          <Text style={S.h2}>On:</Text>
          <ReturnRules name={PrepositionOn} title="On" />
          <Text style={S.h2}>Of:</Text>
          <ReturnRules name={PrepositionOf} title="Of" />
        </View>
        {/* <View style={S.h}>
          <Text style={S.ht}>
            The present perfect continuous is used with the following time
            expression: {'\n'}
            <Text style={S.i}>
              for, since, already,yet, always, just, ever, never, so far, today,
              this week, how long, lately, recently, still (in negations).
            </Text>
          </Text>
        </View>
        <Text style={S.h2}>We use the present perfect continuous:</Text>
        <Text style={S.text}>
          &bull; to put emphasis on the duration of an action which started in
          the past and continues up to the present
        </Text>
        <View style={S.c}>
          <Text style={S.ct}>
            Sam <Text style={S.b}>has been talking</Text> the phone{' '}
            <Text style={S.b}>for</Text> half an hour.{'\n'}(He began talking o
            the phone half an hour ago and he is still talking).
          </Text>
        </View> */}

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
  block: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    borderBottomWidth: 2,
    padding: 20,
  },
})

export default Prepositions
