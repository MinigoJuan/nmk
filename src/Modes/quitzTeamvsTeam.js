import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from "react-native";
import { Icon } from "react-native-elements";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
// cambiar en cada pagina las preguntas
const Users = [
  {
    id: "0",
    question: "Desliza hacia abajo o hacia arriba para cambiar las preguntas",
    answers: "",
    color: "#293462",
  },
  {
    id: "1",
    question: "Desliza hacia abajo o hacia arriba para cambiar las preguntas",
    answers: "",
    color: "#293462",
  },
  {
    id: "2",
    question: "Todos los que tengan Novia/o tomaran 3 tragos",
    space: " ",
    answers: "",
    color: "#293462",
  },
  {
    id: "3",
    question:
      "La primera persona que encuentre un objeto Negro reparte 4 tragos ",
    answers: "",
    color: "#293462",
  },
  {
    id: "4",
    question: "Los que estan bebiendo Tequila, Vodka, Whiskey o Ron",
    answers: "Toman 2 tragos",
    color: "#293462",
  },
  {
    id: "5",
    question: "Si has falsificado una firma bebe 2 tragos",
    answers: "",
    color: "#293462",
  },
  { id: "6", question: "Yo nunca nunca he", answers: "", color: "#7c0a02" },
  {
    id: "7",
    question: "Todos tomense una selfie",
    answers: "",
    color: "#f7b71d",
  },
  {
    id: "8",
    question:
      "Elegir a la persona más inteligente y tendra que beber 4 tragos ",
    answers: "",
    color: "#293462",
  },
  {
    id: "9",
    question:
      "Cada uno adpta el nombre de la persona a su derecha, el que se equivoque bebe 2 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "10",
    question: "Todos los que hayan perdido un telefono móvil, beban 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "11",
    question:
      "Canciones de MANA, los que repitan las canciones, beban 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "12",
    question: "Caricachupas presenta nombres de ",
    answers: "Marcas de cerveza",
    color: "#420000",
  },
  {
    id: "13",
    question: "Todos los que tengan telefono Android, beban 2 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "14",
    question: "Los que tengan tenis tendran que beber 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "15",
    question: "Todos los hijos unicos beban 2 tragos",
    answers: "",
    color: "#293462",
  },
  { id: "16", question: "Yo nunca nunca he", answers: "", color: "#7c0a02" },
  {
    id: "17",
    question: "Toma 2 tragos, si mañana tienes que ir a la escuela ",
    answers: "",
    color: "#293462",
  },
  {
    id: "18",
    question: "Los que estaban borrachos ayer, que se beban 2 tragos",
    answers: "",
    color: "#293462",
  },
  { id: "19", question: "¡TOMAN TODOS!", answers: "", color: "#f7b71d" },
  {
    id: "20",
    question:
      "¿Que prefieres, clima frio o caliente?, la mayoria tendra que beber 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "21",
    question: "Reparte 4 tragos si nunca has visto una pelicula de Marvel",
    answers: "",
    color: "#293462",
  },
  {
    id: "22",
    question:
      "Todo el mundo elije entre Tacos o Pizza, quienes esten en minoria tomaran 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "23",
    question: "Los que sean fan de los Vengadores que se beban 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "24",
    question:
      "Si alguna vez has tenido sexo con alguien mayor de edad bebe 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "25",
    question: "TURBO CHELA!, los que esten tomando cerveza",
    answers: "",
    color: "#293462",
  },
  {
    id: "26",
    question:
      "Los jugadores con las copas menos llenas se las tienen que acabar",
    answers: "",
    color: "#293462",
  },
  {
    id: "27",
    question: "Caricachupas presenta nombres de Marcas de Cigarros ",
    answers: "",
    color: "#420000",
  },
  {
    id: "28",
    question:
      "Reta a quién quieras a una guerra de pulgares, el que pierda tendra que beber 2 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "29",
    question:
      "Elije una palabra, la primera persona que cante el principio de una canción que contenga la canción, reparte 2 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "30",
    question: "El que tenga menos cabello bebe 4 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "31",
    question: "Elegir a los mas carismaticos y repartir 2 tragos",
    answers: "",
    color: "#293462",
  },
  { id: "32", question: "Yo nunca nunca he", answers: "", color: "#7c0a02" },
  {
    id: "34",
    question: "Los que hoy no se hayan bañado beban 2 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "35",
    question:
      "Los que lleguen a tocarse la naris con la lengua reparten 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "36",
    question: "Los que estan fumando ahora mismo beban 2 tragos!",
    answers: "",
    color: "#293462",
  },
  {
    id: "37",
    question: "El jugador mas alto reparte 5 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "38",
    question: "TIENES EL HUANTELETE DEL INFINITO!, Reparte 5 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "39",
    question: "La persona que encuetre al jugador mas joven reparte 4 tragos",
    answers: "",
    color: "#293462",
  },

  {
    id: "40",
    question:
      "Elegir a la persona más desafortunada para el amor y darle 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "41",
    question:
      "Trata de decir los números del uno al diez en cualquier otro idioma o decir el abecedario al revés, si no puedes bebes 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "42",
    question: "Nombres de canciones que comiencen con la letra G",
    answers: "",
    color: "#293462",
  },
  { id: "43", question: "Yo nunca nunca eh:", answers: "", color: "#7c0a02" },
  {
    id: "44",
    question: "FONDO para el ultimo que haya llegado el dia de hoy",
    answers: "",
    color: "#293462",
  },
  {
    id: "45",
    question: "TODOS LOS HOMBRES BEBEN 3 TRAGOS",
    answers: "",
    color: "#f7b71d",
  },
  {
    id: "46",
    question: "Caricachupas presenta nombres de ",
    answers: "Marcas de Cigarros",
    color: "#420000",
  },
  {
    id: "47",
    question: "La persona más guapa reparte 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "48",
    question: "La primera persona que saque un condón reparte 2 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "49",
    question: "Elegir al jugador más tonto y repartir 2 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "50",
    question: "La persona más listo puede repartir 5 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "51",
    question: "¿Qué prefieres, Pepsi o Coca-Cola?",
    answers: "los que esten en minoria beberan 2 trago",
    color: "#293462",
  },
  { id: "52", question: "Yo nunca nunca he:", answers: "", color: "#7c0a02" },
  {
    id: "53",
    question: "Toman todos los que tengan un Iphone beberan 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "54",
    question:
      "3 tragos si la ultima pelicula que hayas visto ha sido romantica ",
    answers: "",
    color: "#293462",
  },
  {
    id: "55",
    question: "Caricachupas presenta nombres de ",
    answers: "Nombres de canciones de Juleta Venegas",
    color: "#420000",
  },
  {
    id: "56",
    question:
      "Confiesa algo que te haya pasado en la cama, si no toma 2 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "57",
    question:
      "La persona que tenga el mejor cuerpo, y tendra que tomar 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "58",
    question: "Los que esten bebiendo cerveza tomaran 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "59",
    question: "Elije a la persona que duerma más que todos. ",
    answers: "tendra que beber 2 tragos",
    color: "#293462",
  },
  {
    id: "60",
    question:
      "Nombra cosas que se llevan de vacaciones, el que se repita, que beba 4 tragos ",
    answers: "",
    color: "#293462",
  },
  {
    id: "61",
    question: "Caricachupas presenta nombres de Redes sociales ",
    answers: "",
    color: "#420000",
  },
  {
    id: "62",
    question: "Bebe un trago si estas soltero, Si tienes pareja toma 2.",
    answers: "",
    color: "#293462",
  },
  {
    id: "63",
    question: "Las personas que sean diestras beben 3 tragos",
    answers: "",
  },
  {
    id: "64",
    question: "Propon una Palabra Prohibida quien la diga, beberan 3 tragos",
    answers: "",
    color: "#293462",
  },
  {
    id: "65",
    question: "Repartan 3 tragos al que menos este tomando",
    answers: "",
    color: "#293462",
  },
  { id: "66", question: "66", answers: "", color: "#293462" },
  { id: "67", question: "67", answers: "", color: "#293462" },
  { id: "68", question: "68", answers: "", color: "#293462" },
  { id: "69", question: "69", answers: "", color: "#293462" },
  { id: "70", question: "70", answers: "", color: "#293462" },
  { id: "71", question: "71", answers: "", color: "#293462" },
  { id: "72", question: "72", answers: "", color: "#293462" },
  { id: "73", question: "73", answers: "", color: "#293462" },
  { id: "74", question: "74", answers: "", color: "#293462" },
  { id: "75", question: "75", answers: "", color: "#293462" },
  { id: "76", question: "76", answers: "", color: "#293462" },
  { id: "77", question: "77", answers: "", color: "#293462" },
  { id: "78", question: "78", answers: "", color: "#293462" },
  { id: "79", question: "79", answers: "", color: "#293462" },
  { id: "80", question: "80", answers: "", color: "#293462" },
  { id: "81", question: "81", answers: "", color: "#293462" },
  { id: "82", question: "82", answers: "", color: "#293462" },
  { id: "83", question: "83", answers: "", color: "#293462" },
  { id: "84", question: "84", answers: "", color: "#293462" },
  { id: "85", question: "85", answers: "", color: "#293462" },
  { id: "86", question: "86", answers: "", color: "#293462" },
  { id: "87", question: "87", answers: "", color: "#293462" },
  { id: "88", question: "88", answers: "", color: "#293462" },
  { id: "89", question: "89", answers: "", color: "#293462" },
  { id: "90", question: "90", answers: "", color: "#293462" },
  { id: "91", question: "91", answers: "", color: "#293462" },
  { id: "92", question: "92", answers: "", color: "#293462" },
  { id: "93", question: "93", answers: "", color: "#293462" },
  { id: "94", question: "94", answers: "", color: "#293462" },
  { id: "95", question: "95", answers: "", color: "#293462" },
  { id: "96", question: "96", answers: "", color: "#293462" },
  { id: "97", question: "97", answers: "", color: "#293462" },
  { id: "98", question: "98", answers: "", color: "#293462" },
  { id: "99", question: "99", answers: "", color: "#293462" },
  { id: "100", question: "100", answers: "", color: "#293462" },
  { id: "101", question: "101", answers: "", color: "#293462" },
];

export default class Quitz extends React.Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };
    console.log(this.props.navigation.state.params);

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        true;
        this.GenerateRandomNumber();
      },
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          }).start(() => {
            this.setState(() => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          this.GenerateRandomNumber();
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          }).start(() => {
            this.setState(
              {
                currentIndex: this.state.currentIndex + 1,
              },
              () => {
                this.position.setValue({ x: 0, y: 0 });
              }
            );
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
      },
    });
  }

  GenerateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * 100 + 1);
    this.setState({
      currentIndex: RandomNumber,
    });
  };

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute",
              },
            ]}
          >
            <View
              style={{
                flex: 1,
                borderRadius: 20,
                backgroundColor: item.color,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.StyleRoted}>{item.question}</Text>
            </View>
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute",
              },
            ]}
          >
            <View
              style={{
                flex: 1,
                borderRadius: 20,
                backgroundColor: item.color,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.StyleRoted}>{item.question}</Text>
            </View>
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#293462" }}>
        {/* <View style={{ height: 65 }}></View>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
        <View style={{ height: 65 }}>
          <Icon
            containerStyle={{ alignSelf: "flex-end" }}
            raised
            name="times-circle"
            type="font-awesome"
            color="#f50"
            onPress={() => this.props.navigation.goBack()}
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2e8ce",
    alignItems: "center",
    justifyContent: "center",
  },
  StyleRoted: {
    transform: [{ rotate: "90deg" }],
    fontSize: 23,
    color: "#f6ecbf",
  },
});
