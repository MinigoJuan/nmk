import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: [],
    };
    console.log(this.state, props);
  }

  addNombre() {
    this.setState({ nombres: [...this.state.nombres, ""] });
  }
  handleChange(e, index) {
    this.state.nombres[index] = e;
    this.setState({ nombres: this.state.nombres });
  }
  removePlayer(index) {
    this.state.nombres.splice(index, 1);
    console.log(this.state.nombres, "$$$");
    this.setState({ nombres: this.state.nombres });
  }

  handleSubmit(e) {
    console.log(this.state, "$$$");
    console.log(this.state.nombres.length);
    this.props.navigation.navigate("QuitzFriends", this.state.nombres);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Dinamic Input </Text>
        {this.state.nombres.map((nombre, index) => {
          return (
            <View key={index}>
              <TextInput
                onChange={(e) => this.handleChange(e.nativeEvent.text, index)}
                value={nombre}
                style={{
                  height: 40,
                  width: 160,
                  borderColor: "gray",
                  borderWidth: 1,
                }}
              ></TextInput>
              <Button
                title="Eliminar jugador"
                onPress={() => this.removePlayer(index)}
              ></Button>
            </View>
          );
        })}
        <Button
          title="Agregar jugador"
          onPress={(e) => this.addNombre(e)}
        ></Button>

        <Text>---------------- </Text>
        <Button
          title="Continuar"
          onPress={(e) => this.handleSubmit(e)}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19212E",
    alignItems: "center",
    justifyContent: "center",
  },
});
