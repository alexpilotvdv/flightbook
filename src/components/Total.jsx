import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Total = (props)=>{
    return (
        <View style={styles.container}>
            <Text>
                {props.total_name}
            </Text>
            <Text>
            {props.total_time} 
            </Text>
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

  export default Total