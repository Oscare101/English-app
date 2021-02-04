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
        <Text style={S.headerTitle}>Contact me</Text>
      </View>
      <View style={S.view}>
        <Text style={S.text}>
          Hi, I am Kirill, the developer of this application. {'\n'}I'm still a
          student and I wrote this app for practice, but I hope it helps you.
          {'\n'}You can write to me if you see an error or want to suggest
          something new. {'\n'}Thanks for using it :)
        </Text>
        <View style={styles.link}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('mailto:kirillfedortsev2000@gmail.com')
            }
          >
            <Ionicons name="mail-outline" size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.instagram.com/invites/contact/?i=9brm44l27rzc&utm_content=1indt8q'
              )
            }
          >
            <Ionicons name="logo-instagram" size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/Oscare101')}
          >
            <Ionicons name="logo-github" size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://t.me/funny_like_panda')}
          >
            <Ionicons name="paper-plane-outline" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const Contact = () => {
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
          <Text style={S.firstTitle}>Contact</Text>
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

export default Contact
