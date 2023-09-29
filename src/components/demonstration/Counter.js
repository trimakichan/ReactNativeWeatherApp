import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [disablebutton, setDisablebutton] = useState(true)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`Our count value is ${count}`)
  }, [count])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Text style={styles.title}>{`Newcount: ${newCount}`}</Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {
          if (disablebutton) setDisablebutton(false)
          setCount(count + 1)
        }}
      />
      <Button
        disabled={disablebutton}
        color={'green'}
        title={'Decrease the count'}
        onPress={() => {
          if (count < 1) {
            setDisablebutton(true)
            setCount(0)
            console.log('gameover')
          } else {
            setCount(count - 1)
          }
        }}
      />

      <Button
        color={'pink'}
        title={'Increase the New Count'}
        onPress={() => {
          setNewCount(newCount + 1)
        }}
      />

      <Button
        color={'blue'}
        title={'Decrease the New Count'}
        onPress={() => {
          setNewCount(newCount - 1)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25
  }
})

export default Counter
