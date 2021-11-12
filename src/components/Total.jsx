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
      backgroundColor: '#ff0',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      height:80,
      width: '95%',
      borderRadius: 20,
      
    },
  });

  export default Total