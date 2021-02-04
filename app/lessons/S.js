import React from 'react'
import { StyleSheet } from 'react-native'
import color from '../components/color'
import * as Font from 'expo-font'
const S = StyleSheet.create({
  screenHeader: {
    // borderBottomWidth: 1,
    // borderBottomColor: 'grey',
    // marginBottom: 2,
    paddingTop: 5,
    backgroundColor: color.headerLessonColor,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  screenTitle: {
    fontSize: 26,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  block: {
    margin: 3,
    width: '95%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    borderBottomWidth: 2,
    padding: 5,
    backgroundColor: '#fff',
    elevation: 10,
    alignSelf: 'center',
  },
  firstTitle: {
    fontSize: 28,
    alignSelf: 'center',
  },
  like: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  lesson: {
    padding: 0,
    flex: 1,
  },
  header: {
    padding: 10,
    paddingRight: 60,
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  colorBg: {
    backgroundColor: color.headerLessonColor,
  },
  view: {
    flex: 1,
    padding: 10,
    paddingTop: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  text: { fontSize: 20 },
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 5,
  },
  h3: {
    fontSize: 22,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  c: {
    backgroundColor: color.commentBlock,
    borderRadius: 10,
    padding: 10,
    margin: 3,
  },
  ct: {
    fontSize: 18,
    color: color.commentText,
  },
  w: {
    backgroundColor: color.warningBlock,
    borderRadius: 10,
    padding: 10,
    margin: 3,
  },
  wt: {
    fontSize: 18,
    color: color.warningText,
  },
  h: {
    backgroundColor: color.hintBlock,
    borderRadius: 10,
    padding: 10,
    margin: 3,
  },
  ht: {
    fontSize: 18,
    color: color.hintText,
  },
  b: { fontWeight: 'bold' },
  i: { fontStyle: 'italic' },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
})

export default S
