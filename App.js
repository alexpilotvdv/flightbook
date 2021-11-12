import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Total from './src/components/Total'
import ListTotal from './src/components/ListTotal';

export default function App() {
  
  return (
    <View style={styles.container}>
     <Total total_name='Общий налет:' total_time = '500 ч. 33 м.'/>
     <View style={styles.list}>
     <ListTotal />
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:50
  },
  list:{
    width: '100%',
    height:'70%',
    alignItems: 'center',
    marginTop:30,
    justifyContent: 'center',
    marginLeft:10
  }
});
