
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import { StoreContext } from '../../statecontext'
import SelectItems from './SelectItems';
import { Dimensions } from 'react-native'
import Alert from './alert'
import { Ionicons } from '@expo/vector-icons';

export default class Newrecord extends Component {

    onChange = (event, selectedDate) => {
        let currentDate = selectedDate || props.data;
        // setShow(Platform.OS === 'ios');
        this.props.setDate(currentDate);
    }
    componentDidMount = () => {
        this.props.init()
        this.returnPickerItemArray()
        // this.props.init()
    }
    returnPickerItemArray = () => {
        let arr = this.pickItemArr = this.props.typeDay.map((el) => {
            return <Picker.Item label={el.value} value={el.id} key={el.id} />
        })
        return arr
    }
    render() {
        // console.log('props',this.props)
        //console.log(this.pickItemArr)
        return (
            <View style={styles.container}>
                <View style={styles.calend}>
                    <Text> {this.props.datatxt} </Text>
                    <TouchableOpacity
                        onPress={() => this.props.openDataTrue()}
                    >
                        <Ionicons name='calendar-outline' size={70} color='blue' />
                    </TouchableOpacity>

                   
                </View>

                {this.props.show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.props.data}
                        mode={'data'}
                        is24Hour={true}
                        display="default"
                        onChange={this.onChange}
                    />
                )}

                <SelectItems nameList='Время суток'
                    elementsList={this.props.typeDay}
                    selected={this.props.selectedType}
                    setType={this.props.setType} />
                <SelectItems nameList='Летательный аппарат'
                    elementsList={this.props.planes}
                    selected={this.props.selectedPlane}
                    setType={this.props.setPlane} />
                <SelectItems nameList='Вид полета'
                    elementsList={this.props.status}
                    selected={this.props.selectedStatus}
                    setType={this.props.setStatus} />
                <SelectItems nameList='Метео условия'
                    elementsList={this.props.meteo}
                    selected={this.props.selectedMeteo}
                    setType={this.props.setMeteo} />
                    <View style = {styles.nalet}>
                     <Text>Полетов</Text>
                     <Text>Налет</Text>
                    </View>
                    <View style = {styles.knopkaZap}>
                <Button onPress={() => this.props.recordNew()} title="Записать" />
                </View>
                {this.props.showAlertRecord && (
                    <Alert props={{... this.props}} />
                )}
                 
            </View>

        );
    }




}


const styles = StyleSheet.create({
    calend:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',


    },
    nalet:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:5
    },
    knopkaZap:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    container: {
        flex: 4,
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
    },
    alert: {
        backgroundColor: 'yellow',
        borderWidth: 1,
        padding: 20,
        margin: 10,
        position: 'absolute',
        top: 200,
        width: (Dimensions.get('window').width - 20),
        alignItems: 'center'
    }
});
