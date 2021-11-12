import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Total from './src/components/Total'
import ListTotal from './src/components/ListTotal';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.total}>
        
      <Total total_name='Общий налет:' total_time = '500 ч. 33 м.'/>
      </View>
     
     <View style={styles.list}>
     <Text style={{marginLeft:10, 
      fontStyle:'italic',
      fontWeight:'bold',
      fontSize:20}}>Налет по типам:</Text>
     <ListTotal />
     </View>
     <View style={styles.knopki}>
     <Ionicons name='settings' size={65} color='#AAFFFF' />
     <Ionicons name='list' size={70} color='#AAFFFF' />
     
     <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        >
        <Ionicons name='add-circle' size={70} color='#AAFFFF' />
      </TouchableOpacity>
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop:50
  },
  total:{
    flex: 1,
    alignItems:'stretch',
    marginTop:20,
    backgroundColor:'gray'
    
  },
  list:{
    flex: 4,
    alignItems:'stretch',
    backgroundColor:'gray'
  },
  knopki:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    padding:5,
    backgroundColor:'gray'
  }
});
