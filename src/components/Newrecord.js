
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import { StoreContext } from '../../statecontext'
import SelectItems from './SelectItems';

export default class Newrecord extends Component  {
    
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
       let arr = this.pickItemArr = this.props.typeDay.map((el)=>{
     return <Picker.Item label={el.value} value={el.id} key={el.id} />
        })
     return arr
    }
    render(){
      // console.log('props',this.props)
       //console.log(this.pickItemArr)
        return (
            <View style={styles.container}>
                <View>
                    <Text> {this.props.datatxt} </Text>
                    <Button onPress={() => this.props.openDataTrue()} title="Выберите дату полета" />
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
                
                <SelectItems nameList = 'Время суток'
                elementsList = {this.props.typeDay} 
                selected = {this.props.selectedType}
                setType = {this.props.setType}/>
                <SelectItems nameList = 'Летательный аппарат'
                elementsList = {this.props.planes} 
                selected = {this.props.selectedPlane}
                setType = {this.props.setPlane}/>
                <SelectItems nameList = 'Вид полета'
                elementsList = {this.props.status} 
                selected = {this.props.selectedStatus}
                setType = {this.props.setStatus}/>
                <SelectItems nameList = 'Метео условия'
                elementsList = {this.props.meteo} 
                selected = {this.props.selectedMeteo}
                setType = {this.props.setMeteo}/>
                <Button onPress={() => this.props.recordNew()} title="Записать" />
                {this.props.showAlertRecord && (
                    <View style={styles.alert}>
                        <Text>Записать?</Text>
                        <Button onPress={() => this.props.record()} title="Записать" />
                    </View>
                )}
            </View>
            
        );
    }
    



}


const styles = StyleSheet.create({
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
    alert:{
        flex: 8,
        backgroundColor: 'yellow'
    }
});
