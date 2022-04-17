import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ElementForList = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>

      {props.delete && (
        <TouchableOpacity onPress={() => {props.delFromBaseNastr(props.table,props.id)}}>
          <Ionicons name="trash-outline" size={30} color="#FF033E" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#AAFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 3,
    height: 80,
    borderRadius: 20,
    margin: 3,
    padding: 10,
  },
});

export default ElementForList;
