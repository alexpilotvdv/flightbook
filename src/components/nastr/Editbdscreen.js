import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ListElement from "./ListElementNastr";
import { Ionicons } from "@expo/vector-icons";
import Alertadd from "./alertadd";

export default class EditScreen extends Component {
  componentDidMount = () => {
    // this.table = this.props.route.params.table
    console.log('pr ',this.props)
    //инициализируем
    this.props.init(this.props.route.params.table);
  };
  render() {
    return (
      <View style={styles.container}>
        <ListElement
          elements={this.props.elements}
          fn={this.props.showedit}
          showOkno={this.props.showOkno}
          dataForEdit={this.props.dataForEdit}
          idForEdit={this.props.idForEdit}
          closefn={this.props.closefn}
          chEdit={this.props.chEdit}
        />
    {this.props.showOknoAdd && <Alertadd param={{ ...this.props }} />}
        <View style={styles.add}>
          <TouchableOpacity
            onPress={() => {
              console.log('table: ',this.props.route.params.table)
              this.props.showAdd();
            }}
          >
            <Ionicons name="add-circle-outline" size={65} color="#000080" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  add: {
    alignItems: "center",
  },
  total: {
    flex: 1,
    alignItems: "stretch",
    marginTop: 20,
    backgroundColor: "gray",
  },
  list: {
    flex: 4,
    alignItems: "stretch",
    backgroundColor: "gray",
  },
  knopki: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "gray",
  },
});
