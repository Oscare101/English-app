import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Tab from './Tab'
const { width } = Dimensions.get('screen')

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Home')
  const { routes } = state

  const renderColor = (currentTab) =>
    currentTab === selected ? '#589C00' : 'black'

  const handlerPress = (activeTab, index) => {
    setSelected(activeTab)
    navigation.navigate(activeTab)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlerPress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 10,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 100,

    elevation: 10, // only for android
  },
})

export default TabBar
