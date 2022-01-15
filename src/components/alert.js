import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const Alert = ({props}) => {
    console.log('props ', props.datatxt)
    return (
        <View style={styles.alert}>
            <Text>
                Дата: {props.datatxt}
            </Text>
            <Text>
                Полетов: {props.colPolInInput}
            </Text>
            <Text>
                Время суток: {props.typeDay[props.selectedType].value}
            </Text>
            <Text>
                Тип ЛА: {props.planes[props.selectedPlane].value}
            </Text>
            <Text>
                Статус: {props.status[props.selectedStatus].value}
            </Text>
            <Text>
                Метеоусловия: {props.meteo[props.selectedMeteo].value}
            </Text>
            <TouchableOpacity
                onPress={() => props.recordCancel()}
            >
                <Ionicons name='close-circle-outline' size={70} color='red' />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.record()}
            >
                <Ionicons name='checkmark-outline' size={70} color='green' />
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({

    alert: {
        backgroundColor: 'yellow',
        borderWidth: 1,
        padding: 20,
        margin: 10,
        position: 'absolute',
        top: 200,
        width: (Dimensions.get('window').width - 20),
        alignItems: 'center',
        elevation: 4
    }
});

export default Alert