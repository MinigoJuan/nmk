import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Image, Text } from "react-native-elements";
import Social from "../components/socialred";
export default class FlexDirectionBasics extends Component {
  constructor() {
    super();
    this.state = {
      red: "",
      blue: ""
    };
    console.log(this.props);
  }
  changeTextRed = red => {
    this.setState({
      red
    });
  };
  changeTextBlue = blue => {
    this.setState({
      blue
    });
  };
  submitGame = () => {
    if (this.state.blue && this.state.red) {
      this.props.navigation.navigate("QuitzTvsT", this.state);
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#19212E"
        }}
      >
        <View>
          <Image
            source={require("../../assets/imagesofCategories/logobeer.png")}
            resizeMode="contain"
            style={{ width: 300, height: 180 }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch"
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#E63406",
              justifyContent: "space-around",
              alignContent: "center",
              marginLeft: 8,
              marginRight: 8
            }}
          >
            <Text
              style={{ alignSelf: "center", color: "#f8f8f8", fontSize: 25 }}
            >
              Equipo Rojo
            </Text>
            <Input
              placeholder="Nombre"
              leftIcon={<Icon name="user" size={24} color="#f8f8f8" />}
              inputStyle={{ marginRight: 15, marginLeft: 12, color: "#f8f8f8" }}
              value={this.state.red}
              onChangeText={red => this.changeTextRed(red)}
            />
            <Image
              containerStyle={{ alignSelf: "center", marginTop: 20 }}
              resizeMode="cover"
              source={require("../../assets/tvt2.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#21A1E8",
              justifyContent: "space-around",
              marginLeft: 8,
              marginRight: 8
            }}
          >
            <Text
              style={{ alignSelf: "center", color: "#f8f8f8", fontSize: 25 }}
            >
              Equipo Azul
            </Text>
            <Input
              placeholder="Nombre"
              leftIcon={<Icon name="user" size={24} color="#f8f8f8" />}
              inputStyle={{ marginRight: 15, marginLeft: 12, color: "#f8f8f8" }}
              onChangeText={blue => this.changeTextBlue(blue)}
              value={this.state.blue}
            />
            <Image
              containerStyle={{ alignSelf: "center", marginTop: 20 }}
              resizeMode="cover"
              source={require("../../assets/tvt.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </View>
        <View style={{ marginBottom: 20, marginTop: 20, flexDirection: "row" }}>
          <Button
            onPress={() => this.submitGame()}
            title="A jugar "
            buttonStyle={{
              backgroundColor: "#52de97",
              margin: 8,
              borderRadius: 8
            }}
          />
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Atras "
            buttonStyle={{
              backgroundColor: "#da4302",
              margin: 8,
              borderRadius: 8
            }}
          />
        </View>
        <View style={{ marginBottom: 5 }}>
          <Social />
        </View>
      </View>
    );
  }
}
