import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Total = (props)=>{
    return (
        <View style={styles.container}>
            <Text>
                Общий налет:
            </Text>
            <Text>
                500 ч. 30 м.:
            </Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      height:100,
      width: '80%',
      borderRadius: 20,
    },
  });

  export default Total