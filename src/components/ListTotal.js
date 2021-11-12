import React from 'react';
import { StyleSheet, Text, View, FlatList,SafeAreaView } from 'react-native';
import Total from './Total';
const data=[
    {
        id:'1',
        total_name:'Ан-26:',
        total_time:'500 ч. 33 м.'
    },
    {
        id:'2',
        total_name:'L-410:',
        total_time:'500 ч. 33 м.'
    },
    {
        id:'3',
        total_name:'Ан-26:',
        total_time:'500 ч. 33 м.'
    },
    {
        id:'4',
        total_name:'Ан-26:',
        total_time:'500 ч. 33 м.'
    },
    {
        id:'5',
        total_name:'Ан-26:',
        total_time:'500 ч. 33 м.'
    },
    {
        id:'6',
        total_name:'Ан-26:',
        total_time:'500 ч. 33 м.'
    },
    {
        id:'7',
        total_name:'Ан-26:',
        total_time:'500 ч. 33 м.'
    },
    {
        id:'8',
        total_name:'Ан-26:',
        total_time:'500 ч. 33 м.'
    },
    {
        id:'9',
        total_name:'Ан-26:',
        total_time:'500 ч. 33 м.'
    },
    {
        id:'10',
        total_name:'Ан-26:',
        total_time:'500 ч. 33 м.'
    }
]
const ListTotal = (props)=>{
    const renderItem=({item})=>{
        return(
            
            <Total total_name={item.total_name} total_time = {item.total_time}/>
            
        )
    }
    return (
        
       <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.container}
      />
        
     
    
        
    ) 
}

const styles = StyleSheet.create({
    container: {
    width:'100%',
    
    },
  });

  export default ListTotal