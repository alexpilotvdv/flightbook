import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableHighlight } from 'react-native';
import ElementForList from './ElementForList';
import AlertEdit from './alertedit'

const ListElement = (props)=>{
    console.log("itogi",props)

    const renderItem=({item})=>{
        console.log("itogi",props)
        return(
            <TouchableHighlight
            onLongPress = {()=>props.fn(item.id,item.value)}
               >
            <ElementForList name = {item.value} delete = {item.canDelete} /> 
            </TouchableHighlight> 
        )
    }
    return (
        <View>
 <FlatList
        data={props.elements}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />

{props.showOkno && (
 <AlertEdit param={{...props}} />
                )}
        </View>
      

      
        
     
    
        
    ) 
}

const styles = StyleSheet.create({
    container: {
    width:'100%',
    
    },
  });

  export default ListElement