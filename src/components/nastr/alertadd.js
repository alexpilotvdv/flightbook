import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input, Icon } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons'
const Alertadd = (props) => {
  //console.log("props ", props);
  return (
    <View style={styles.alert}>
      <Input
        containerStyle={styles.input}
        value={props.param.dataForAdd}
        rightIcon = {
            <FontAwesome5 name="edit" size={23} color="green" />
        } 
        onChangeText={(value) => props.param.chAdd(value)}
      />

      <Text>{props.param.dataForAdd}</Text>

      <TouchableOpacity
        onPress={() => {
          props.param.closefn();
        }}
      >
        <Ionicons name="close-circle-outline" size={70} color="red" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // функция записи в базу
        }}
      >
        <Ionicons name="checkmark-outline" size={70} color="green" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    backgroundColor: "yellow",
    borderWidth: 1,
    padding: 20,
    margin: 10,
    position: "absolute",
    top: 200,
    width: Dimensions.get("window").width - 20,
    alignItems: "center",
    elevation: 4,
  },
  input: {

    width: 300,


}
});

export default Alertadd;
