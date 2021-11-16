
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {StoreContext} from '../../statecontext'

export default Newrecord =(props)=> {
   console.log('props',props)
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        props.setDate(currentDate);
    }
    return (
        <View style={styles.container}>
            <View>
                <Text> {props.datatxt} </Text>
                <Button onPress={()=>props.openDataTrue()} title="Выберите дату полета" />
            </View>
            {props.show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={props.data}
                    mode={'data'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

        </View>
    );

    
   
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginTop: 50
    },
    total: {
        flex: 1,
        alignItems: 'stretch',
        marginTop: 20,
        backgroundColor: 'gray'

    },
    list: {
        flex: 4,
        alignItems: 'stretch',
        backgroundColor: 'gray'
    },
    knopki: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'gray'
    }
});
