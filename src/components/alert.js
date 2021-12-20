import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const Alert = (props) => {
    //console.log('props ', props)
    return (
        <View style={styles.alert}>
            <Text>
                Дата: {props.props.datatxt}
            </Text>
            <Text>
               Время суток: {props.props.typeDay[props.props.selectedType].value}
            </Text>
            <Text>
                Тип ЛА: {props.props.planes[props.props.selectedPlane].value}
            </Text>
            <Text>
            Статус: {props.props.status[props.props.selectedStatus].value}
            </Text>
            <Text>
            Метеоусловия: {props.props.meteo[props.props.selectedMeteo].value}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    props.props.record()
                } }
            >
                <Ionicons name='close-circle-outline' size={70} color='red' />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>  props.props.record()}
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
        elevation:4
    }
});

export default Alert