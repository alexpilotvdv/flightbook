import React from 'react';
import { StyleSheet, Text, View, FlatList,SafeAreaView } from 'react-native';
import Total from './Total';

const ListTotal = (props)=>{
    //console.log("itogi",props)
    const retStrTime = (minut) =>{
        let totalH = parseInt(minut/60)
        let totalM = minut % 60
        let strnalet = totalH + ' ч, ' + totalM + ' м'
        return strnalet
    }
    const renderItem=({item})=>{
      
        return(
            <Total total_name={item.value} total_time = {retStrTime(item['SUM (minuts)'])}/>
        )
    }
    return (
        
       <FlatList
        data={props.par}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    
      />
        
     
    
        
    ) 
}

const styles = StyleSheet.create({
    container: {
    width:'100%',
    
    },
  });

  export default ListTotal