import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// screen
import index from "../screns/index";
import category from "../screns/Category";
import CategoryStudent from "../screns/CategoryStudent";
import QuitzFriends from "../Modes/quitzFriends";
import QuitzHot from "../Modes/quitzHot";
import QuitzShot from "../Modes/quitzShot";
import QuitzTvsT from "../Modes/quitzTeamvsTeam";
import Tvst from "../screns/temvsteam";
// questions mode student
import QuitzAleatotio from "../Modes/ModesEstudent/quitzAleatorio";
import QuitzDerecho from "../Modes/ModesEstudent/QuitzDerecho";
import QuitzEconomia from "../Modes/ModesEstudent/QuitzEconomia";
import QuitzIngenieria from "../Modes/ModesEstudent/QuitzIngenieria";
import QuitzArquitectura from "../Modes/ModesEstudent/QuitzArquitectura";
import QuitzPsicologia from "../Modes/ModesEstudent/QuitzPsicologia";
import QuitzIngles from "../Modes/ModesEstudent/QuitzIngles";

const HomeScreen = createStackNavigator(
  {
    Home: {
      screen: index,
      navigationOptions: ({ navigation }) => ({})
    },
    Category: {
      screen: category,
      navigationOptions: ({ navigation }) => ({})
    },
    TeamvsTeam: {
      screen: Tvst,
      navigationOptions: ({ navigation }) => ({})
    },
    CategoryStudent: {
      screen: CategoryStudent,
      navigationOptions: ({ navigation }) => ({})
    },
    QuitzFriends: {
      screen: QuitzFriends,
      navigationOptions: ({ navigation }) => ({})
    },
    QuitzHot: {
      screen: QuitzHot,
      navigationOptions: ({ navigation }) => ({})
    },
    QuitzShot: {
      screen: QuitzShot,
      navigationOptions: ({ navigation }) => ({})
    },
    QuitzTvsT: {
      screen: QuitzTvsT,
      navigationOptions: ({ navigation }) => ({})
    },
    // ENCUESTAS DE ESTUDIANTE
    QuitzAleatotio: {
      screen: QuitzAleatotio,
      navigationOptions: ({ navigation }) => ({})
    },
    QuitzDerecho: {
      screen: QuitzDerecho,
      navigationOptions: ({ navigation }) => ({})
    },
    QuitzEconomia: {
      screen: QuitzEconomia,
      navigationOptions: ({ navigation }) => ({})
    },

    QuitzIngles: {
      screen: QuitzIngles,
      navigationOptions: ({ navigation }) => ({})
    },
    QuitzIngenieria: {
      screen: QuitzIngenieria,
      navigationOptions: ({ navigation }) => ({})
    },
    QuitzPsicologia: {
      screen: QuitzPsicologia,
      navigationOptions: ({ navigation }) => ({})
    },
    QuitzArquitectura: {
      screen: QuitzArquitectura,
      navigationOptions: ({ navigation }) => ({})
    }
  },
  { initialRuteName: "Home", headerMode: "none" }
);

export default createAppContainer(HomeScreen);
