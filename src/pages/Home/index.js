import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'
import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'

const myList = [
  {
    "date": "17/03",
    "weekday": "Qua",
    "max": 28,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 26,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 26,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 27,
    "min": 17,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "21/03",
    "weekday": "Dom",
    "max": 28,
    "min": 17,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "22/03",
    "weekday": "Seg",
    "max": 28,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "23/03",
    "weekday": "Ter",
    "max": 23,
    "min": 19,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "24/03",
    "weekday": "Qua",
    "max": 24,
    "min": 18,
    "description": "Tempo nublado",
    "condition": "cloud"
  },
  {
    "date": "25/03",
    "weekday": "Qui",
    "max": 24,
    "min": 18,
    "description": "Trovoadas dispersas",
    "condition": "storm"
  },
  {
    "date": "26/03",
    "weekday": "Sex",
    "max": 24,
    "min": 17,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  }
];

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Menu />
      <Conditions />
      <FlatList 
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={myList}
        keyExtractor={ item => item.date }
        renderItem={ ({item}) => <Forecast data={item}/> }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%'
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  }
})