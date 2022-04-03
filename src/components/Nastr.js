import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
const Nastr = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => {
        props.navigation.push(
          'Редактирование',{
            table:'meteo'
          }
        )
      }}>
        <View style={styles.container}>
          <Text>Метеоусловия</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        props.navigation.push(
          'Редактирование',{
            table:'plane'
          }
        )
      }}>
        <View style={styles.container}>
          <Text>Летательные аппараты</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        props.navigation.push(
          'Редактирование',{
            table:'day'
          }
        )
      }}>
        <View style={styles.container}>
          <Text>Виды полетов</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        props.navigation.push(
          'Редактирование',{
            table:'status'
          }
        )
      }}>
        <View style={styles.container}>
          <Text>Выполняемые функции</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AAFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    height: 80,
    borderRadius: 20,
    margin: 3,
  },
});
export default Nastr;
