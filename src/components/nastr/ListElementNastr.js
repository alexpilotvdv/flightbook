import React from 'react';
import { StyleSheet, Text, View, FlatList,SafeAreaView } from 'react-native';


const ListElement = (props)=>{
    //console.log("itogi",props)

    const renderItem=({item})=>{
      
        return(
            <Text> {item.value} </Text>
        )
    }
    return (
        
       <FlatList
        data={props.elements}
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

  export default ListElement