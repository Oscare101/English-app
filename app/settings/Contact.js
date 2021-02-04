import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Contact = () => {
  return (
    <View style={styles.View}>
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
        onPress={() =>
          Linking.openURL(
            'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3BZZcCqTqxTROhURPqcb7gBw%3D%3D'
          )
        }
      >
        <Ionicons name="logo-linkedin" size={40} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://t.me/funny_like_panda')}
      >
        <Ionicons name="paper-plane-outline" size={40} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL('mailto:kirillfedortsev2000@gmail.com')}
      >
        <Ionicons name="mail-outline" size={40} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    flexDirection: 'row',
  },
})

export default Contact
