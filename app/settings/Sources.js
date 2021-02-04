import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import S from '../lessons/S'
const Lesson = () => {
  return (
    <View styke={styles.View}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Sources</Text>
      </View>
      <View style={S.view}>
        <Text style={S.text}>
          &bull; Grammarway - Jenny Dooley, Virginia Evans {'\n'}
          &bull; Oxford Practice Grammar Advanced - George Yule {'\n'}
          &bull; English File - Christian Latham-Koening
        </Text>
      </View>
    </View>
  )
}

const Sources = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Modal visible={modalVisible} animationType="slide">
        <Lesson />
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.close}
        >
          <Ionicons name="close-outline" size={40} color={'black'} />
        </TouchableOpacity>
      </Modal>
      <View style={S.block}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={S.firstTitle}>Sources</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  link: {
    paddingVertical: 20,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
})

export default Sources
