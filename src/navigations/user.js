import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// screen
import index from "../screns/index";
import category from "../screns/Category";
import CategoryStudent from "../screns/CategoryStudent";
import addFriends from "../screns/UsersFriends";
import QuitzFriends from "../Modes/quitzFriends";
import QuitzHot from "../Modes/quitzHot";
import QuitzShot from "../Modes/quitzShot";
import Redes from "../screns/CategoryCreator";
// questions mode student
import QuitzAleatotio from "../Modes/ModesEstudent/quitzAleatorio";
import QuitzDerecho from "../Modes/ModesEstudent/QuitzDerecho";

const HomeScreen = createStackNavigator(
  {
    Home: {
      screen: index,
      navigationOptions: ({ navigation }) => ({}),
    },
    Category: {
      screen: category,
      navigationOptions: ({ navigation }) => ({}),
    },

    CategoryStudent: {
      screen: CategoryStudent,
      navigationOptions: ({ navigation }) => ({}),
    },
    QuitzFriends: {
      screen: QuitzFriends,
      navigationOptions: ({ navigation }) => ({}),
    },
    QuitzHot: {
      screen: QuitzHot,
      navigationOptions: ({ navigation }) => ({}),
    },
    QuitzShot: {
      screen: QuitzShot,
      navigationOptions: ({ navigation }) => ({}),
    },
    Redes: {
      screen: Redes,
      navigationOptions: ({ navigation }) => ({}),
    },
    addFriends: {
      screen: addFriends,
      navigationOptions: ({ navigation }) => ({}),
    },
    // ENCUESTAS DE ESTUDIANTE
    QuitzAleatotio: {
      screen: QuitzAleatotio,
      navigationOptions: ({ navigation }) => ({}),
    },
    QuitzDerecho: {
      screen: QuitzDerecho,
      navigationOptions: ({ navigation }) => ({}),
    },
  },
  { initialRuteName: "Home", headerMode: "none" }
);

export default createAppContainer(HomeScreen);
