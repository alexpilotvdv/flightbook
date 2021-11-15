
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showDatepicker = () => {
        setShow(true);
        setMode('date');
    };
    return (
        <View style={styles.container}>
            <View>
                <Button onPress={showDatepicker} title="Выберите дату полета" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
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
