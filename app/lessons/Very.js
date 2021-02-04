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
    <View style={S.lesson}>
      <View style={S.header}>
        <Text style={S.headerTitle}>Lesson 1</Text>
      </View>
      <ScrollView style={S.view} showsVerticalScrollIndicator={false}>
        <Text style={S.h2}>
          sgvzwexrcdtfvgybuhnjimko,omjiunhygerbwetWhether the drawer should stay
          open by default. When this is true, the drawer will be open from the
          initial render. It can be closed normally using gestures or
          programmatically. However, when going back, drawer will re-open if it
          was closed. This essentially reverses the behavior of the drawer where
          the closed state is the default state.Whether the drawer should stay
          open by default. When this is true, the drawer will be open from the
          initial render. It can be closed normally using gestures or
          programmatically. However, when going back, drawer will re-open if it
          was closed. This essentially reverses the behavior of the drawer where
          the closed state is the default state.Whether the drawer should stay
          open by default. When this is true, the drawer will be open from the
          initial render. It can be closed normally using gestures or
          programmatically. However, when going back, drawer will re-open if it
          was closed. This essentially reverses the behavior of the drawer where
          the closed state is the default state.Whether the drawer should stay
          open by default. When this is true, the drawer will be open from the
          initial render. It can be closed normally using gestures or
          programmatically. However, when going back, drawer will re-open if it
          was closed. This essentially reverses the behavior of the drawer where
          the closed state is the default state.gw
        </Text>
      </ScrollView>
    </View>
  )
}

const Very = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={S.cont}>
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
          <Text>Very</Text>
        </TouchableOpacity>
        <View style={S.like}>
          <TouchableOpacity>
            <Ionicons name="heart" />
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
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
})

export default Very
