import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Procurar</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})