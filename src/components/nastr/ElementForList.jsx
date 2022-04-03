import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ElementForList = (props)=>{
    
    return (
       
   <View style={styles.container}  >
            <Text>
                {props.name}
            </Text>
            
            <Ionicons name="create-outline" size={30}/>
                {props.delete && (
                    <Ionicons name='trash-outline' size={30} color='#FF033E' />
                )}
            
            
        </View>
      
       
     
    ) 
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#AAFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      height:80,
      borderRadius: 20,
      margin:3
      
    },
  });

  export default ElementForList