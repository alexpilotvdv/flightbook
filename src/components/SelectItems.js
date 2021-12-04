import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'

SelectItems = (props) => {
    returnPickerItemArray = () => {
        let arr = props.elementsList.map((el) => {
            return <Picker.Item label={el.value} value={el.id} key={el.id} />
        })
        return arr
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#AAFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 3,
            height: 80,
            borderRadius: 20,
            margin: 3
        },
    })

    return (
        <View style={styles.container}>
            <Text>{props.nameList}</Text>
            <Picker
                selectedValue={props.selected}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => props.setType(itemValue)}
            >
                {returnPickerItemArray()}
            </Picker>
        </View>

    )
   
}

export default SelectItems