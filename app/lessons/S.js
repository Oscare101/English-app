import React from 'react'
import { StyleSheet } from 'react-native'

const S = StyleSheet.create({
  cont: {},
  block: {
    margin: 3,
    width: '48%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    borderBottomWidth: 2,
    padding: 5,
    backgroundColor: '#fff',
    elevation: 10,
  },
  like: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  lesson: {
    padding: 0,
  },
  header: {
    padding: 10,
    paddingRight: 60,
  },
  headerTitle: {
    fontSize: 30,
  },
  view: {
    padding: 10,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  h3: {
    fontSize: 22,
  },
})

export default S
