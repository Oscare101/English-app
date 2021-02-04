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

const Lesson = () => {
  return (
    <View style={[S.lesson, S.colorBg]}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Strong adjectives</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.h2}>Strong adjectives</Text>
      </ScrollView>
    </View>
  )
}

const Very = () => {
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
          <Ionicons name="close-outline" size={40} color={'black'} />
        </TouchableOpacity>
      </Modal>
      <View style={S.block}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={S.firstTitle}>Strong adjectives</Text>
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

export default Very
