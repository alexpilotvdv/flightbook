
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Picker } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StoreContext } from '../../statecontext'

export default Newrecord = (props) => {
    //console.log('props',props)
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || props.data;
        // setShow(Platform.OS === 'ios');
        props.setDate(currentDate);
    }
    return (
        <View style={styles.container}>
            <View>
                <Text> {props.datatxt} </Text>
                <Button onPress={() => props.openDataTrue()} title="Выберите дату полета" />
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
            <Text>ЛА</Text>
            <Picker
                selectedValue={props.selectedType}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => props.setType(itemValue)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
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
