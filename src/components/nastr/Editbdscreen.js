import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ListElement from "./ListElementNastr";

export default class EditScreen extends Component {
  componentDidMount = () => {
    // this.table = this.props.route.params.table
    // console.log('pr ',this.props)
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
