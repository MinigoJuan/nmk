import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Icon, Button } from "react-native-elements";

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
    
        <Text style={styles.namePlayer}> Elije a los jugadores </Text>
        {this.state.nombres.map((nombre, index) => {
          return (
            <View key={index} style={styles.containerInput}>
              <TextInput
                onChange={(e) => this.handleChange(e.nativeEvent.text, index)}
                value={nombre}
                style={{
                  color:"#f7f7f7",
                  height: 40,
                  width: 200,
                  borderColor: "#ffcd3c",
                  borderWidth: 2,
                  borderRadius:15

                }}
              ></TextInput>
             
              <Icon
  raised
  name='delete'
  type='material-community'
  color='#f50'
  onPress={() => this.removePlayer(index)} />
            </View>
          );
        })}
        <Button
        buttonStyle={styles.containerButton}
          title="Agregar jugador"s
          onPress={(e) => this.addNombre(e)}

        ></Button>

       
        <Button
          title="A jugar!"
          onPress={(e) => this.handleSubmit(e)}
          buttonStyle={styles.containerButton}
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
  namePlayer:{
    color: "#f6cd61",
    fontSize: 24,
    marginBottom:5
  },
  containerInput:  {
    flexDirection:"row",
    alignItems:"center"
  },
  containerButton:{
    width:'90%',
    height:40
    ,backgroundColor:'#f6cd61',borderRadius:15, marginTop:8, marginBottom:5
  }
});
