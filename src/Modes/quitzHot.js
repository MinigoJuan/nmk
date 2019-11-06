import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import { Icon } from "react-native-elements";
const Users = [
  {
    id: "0",
    question: "¿Quién fue su primer amor y cómo terminó esa historia?",
    answers: "",
    color: "#293462"
  },
  {
    id: "1",
    question: "¿Qué es lo más loco que has hecho por amor?",
    answers: "",
    color: "#293462"
  },
  {
    id: "2",
    question: "¿Cómo fue tu primer beso?",
    space: " ",
    answers: "",
    color: "#293462"
  },
  {
    id: "3",
    question: "¿Con qué celebridad te gustaría tener sexo?",
    answers: "",
    color: "#293462"
  },
  {
    id: "4",
    question: "¿Has sido infiel?",
    answers: "Toman 2 tragos",
    color: "#293462"
  },
  {
    id: "5",
    question: "¿Quién fue la primera persona de la que te enamoraste?",
    answers: "",
    color: "#293462"
  },
  {
    id: "6",
    question: "¿Cuál piensas que es tú mejor cualidad no física?",
    answers: "",
    color: "#7c0a02"
  },
  {
    id: "7",
    question: "¿Cuál es la parte más sensible de tu cuerpo?",
    answers: "",
    color: "#f7b71d"
  },
  {
    id: "8",
    question: "¿Has besado a alguien de tu mismo sexo?",
    answers: "",
    color: "#293462"
  },
  {
    id: "9",
    question: "¿Cuál es la parte que menos te gusta de tu cuerpo?",
    answers: "",
    color: "#293462"
  },
  {
    id: "10",
    question: "¿Tienes algún fetiche que quieras confesar?",
    answers: "",
    color: "#293462"
  },
  {
    id: "11",
    question: "¿Cómo calificas tu desempeño en el sexo?",
    answers: "",
    color: "#293462"
  },
  {
    id: "12",
    question: "¿Tienes una fantasía sexual prohibida?",
    answers: "Marcas de cerveza",
    color: "#420000"
  },
  {
    id: "13",
    question: "¿Qué es lo más doloroso que te ha pasado?",
    answers: "",
    color: "#293462"
  },
  {
    id: "14",
    question: "¿Con cuál animal te identificas?",
    answers: "",
    color: "#293462"
  },
  {
    id: "15",
    question: "¿Tienes una pesadilla o sueño constante?",
    answers: "",
    color: "#293462"
  },
  {
    id: "16",
    question: "¿Tienes una página porno favorita?",
    answers: "",
    color: "#7c0a02"
  },
  {
    id: "17",
    question: "¿Cómo aprendiste a besar?",
    answers: "",
    color: "#293462"
  },
  {
    id: "18",
    question: " ¿Cómo fue tu primera vez?",
    answers: "",
    color: "#293462"
  },
  {
    id: "19",
    question: "¿Algunas vez fingiste un orgasmo?",
    answers: "",
    color: "#f7b71d"
  },
  {
    id: "20",
    question: "¿Bailarías sexy para alguien?",
    answers: "",
    color: "#293462"
  },
  {
    id: "21",
    question: "¿Has ido a una playa nudista?",
    answers: "",
    color: "#293462"
  },
  {
    id: "22",
    question: "¿Qué es lo que jamás harías por amor?",
    answers: "",
    color: "#293462"
  },
  {
    id: "23",
    question: "¿Te tatuarías en pareja?",
    answers: "",
    color: "#293462"
  },
  {
    id: "24",
    question: "¿Has amado más a tu mascota que a alguna persona?",
    answers: "",
    color: "#293462"
  },
  {
    id: "25",
    question: "¿Tienes algún secreto que te avergüence?",
    answers: "",
    color: "#293462"
  },
  {
    id: "26",
    question: "¿Te gustan los disfraces eróticos?",
    answers: "",
    color: "#293462"
  },
  {
    id: "27",
    question: "¿Qué canción amas en secreto?",
    answers: "",
    color: "#420000"
  },
  {
    id: "28",
    question: "¿Qué tipo de sexo jamás has practicado?",
    answers: "",
    color: "#293462"
  },
  {
    id: "29",
    question: "¿Puedes describir la sensación de orgasmo en una palabra?",
    answers: "",
    color: "#293462"
  },
  {
    id: "30",
    question: "¿Has entrado a alguna página de cybersex?",
    answers: "",
    color: "#293462"
  },
  {
    id: "31",
    question: "¿Cuál ha sido la peor etapa de tu vida? ",
    answers: "",
    color: "#293462"
  },
  {
    id: "32",
    question: "¿Le has llevado serenata a alguien?",
    answers: "",
    color: "#7c0a02"
  },
  {
    id: "33",
    question: "¿Has besado a alguno de tus amigos más cercanos? ¿Quién?",
    answers: "",
    color: "#7c0a02"
  },
  {
    id: "34",
    question: "¿Le confesarías a tu mamá tu mejor o peor experiencia sexual?",
    answers: "",
    color: "#293462"
  },
  {
    id: "35",
    question: "¿Te han sorprendido masturbándote?",
    answers: "",
    color: "#293462"
  },
  {
    id: "36",
    question: "¿Qué prefieres: tener sexo, comer o dormir?",
    answers: "",
    color: "#293462"
  },
  {
    id: "37",
    question: "¿Perdonarías una infidelidad?",
    answers: "",
    color: "#293462"
  },
  {
    id: "38",
    question: "Si pudieras cambiar algo de tu cuerpo, ¿qué sería?",
    answers: "",
    color: "#293462"
  },
  {
    id: "39",
    question: "¿Qué es lo más loco que has hecho por amor?",
    answers: "",
    color: "#293462"
  },

  {
    id: "40",
    question: "Confiésa uno de tus secretos.",
    answers: "",
    color: "#293462"
  },
  {
    id: "41",
    question: "¿Alguna vez te han sorprendido en una situación comprometedora?",
    answers: "",
    color: "#293462"
  },
  {
    id: "42",
    question: "¿Alguna vez has dudado de tu orientación sexual?",
    answers: "",
    color: "#293462"
  },
  {
    id: "43",
    question:
      "Si te encuentras a tu ex en una fiesta y te pide un beso, ¿se lo darías",
    answers: "",
    color: "#7c0a02"
  },
  {
    id: "44",
    question:
      "Si tuvieras la oportunidad de salir en una cita con una persona famosa, ¿a quién elegirías?",
    answers: "",
    color: "#293462"
  },
  {
    id: "45",
    question: "¿Cuál es tu fantasía sexual más deseada?",
    answers: "",
    color: "#f7b71d"
  },
  {
    id: "46",
    question: "¿Te has sentido atraído por alguna de tus amig@s? ",
    answers: "",
    color: "#420000"
  },
  {
    id: "47",
    question: "¿Cuál es el lugar más extraño donde has intimado con alguien?",
    answers: "",
    color: "#293462"
  },
  {
    id: "48",
    question: "¿Te gusta provocar o que te provoquen?",
    answers: "",
    color: "#293462"
  },
  {
    id: "49",
    question: "¿Alguna vez te has sentido incómodo en la intimidad?",
    answers: "",
    color: "#293462"
  },
  {
    id: "50",
    question: "¿Qué es lo primero que miras en una persona cuando la conoces?",
    answers: "",
    color: "#293462"
  },
  {
    id: "51",
    Tema: "RETO",
    question: "Da un beso de dos minutos a cualquier persona que tu quieras",
    answers: "",
    color: "#293462"
  },
  {
    id: "52",
    Tema: "RETO",
    question:
      "Quítate 4 prendas que no podrás volver a usar durante el resto del juego.",
    answers: "",
    color: "#7c0a02"
  },
  {
    id: "53",
    Tema: "RETO",
    question: "Haz una propuesta indecente.",
    answers: "",
    color: "#293462"
  },
  {
    id: "54",
    Tema: "RETO",
    question:
      "Cambia por tres horas, la foto de perfil de tu red social favorita por una fotografía donde aparezcamos los dos.",
    answers: "",
    color: "#293462"
  },
  {
    id: "55",
    Tema: "RETO",
    question: "Haz 3 preguntas íntimas a cualquiera de los participantes",
    answers: "",
    color: "#420000"
  },
  {
    id: "56",
    question: "¿Amor o dinero?",
    answers: "",
    color: "#293462"
  },
  {
    id: "57",
    question: "¿Qué es lo más extraño que has buscado en internet?",
    answers: "",
    color: "#293462"
  },
  {
    id: "58",
    question: "¿Cuál es la cosa más infantil que todavía haces?",
    answers: "",
    color: "#293462"
  },
  {
    id: "59",
    question: "¿Cuál es la foto de tu galeria más vergonzosa de ti? ",
    answers: "",
    color: "#293462"
  },
  {
    id: "60",
    question: "¿Con quién saldrías de aquí en una cita?",
    answers: "",
    color: "#293462"
  },
  {
    id: "61",
    question:
      "¿Quién es la persona que más sabe de ti y qué tipo de secretos sobre tu vida guarda?",
    answers: "",
    color: "#420000"
  },
  {
    id: "62",
    question: "¿De qué color es tu ropa interior?",
    answers: "",
    color: "#293462"
  },
  {
    id: "63",
    question: "¿De qué color es tu ropa interior?",
    answers: ""
  },
  {
    id: "64",
    question: "¿Has hecho cosas borracho que al día siguiente no recuerdes?",
    answers: "",
    color: "#293462"
  },
  {
    id: "65",
    question: "¿Quién es la persona más sexy aquí?",
    answers: "",
    color: "#293462"
  },
  {
    id: "66",
    question: "¿Por qué rompiste con tu último novio o novia?",
    answers: "",
    color: "#293462"
  },
  {
    id: "67",
    question:
      "¿En qué país te gustaría vivir con tu pareja si tuvieras la oportunidad?",
    answers: "",
    color: "#293462"
  },
  {
    id: "68",
    question: "¿Cuál es tu talento especial que tengas en la cama?",
    answers: "",
    color: "#293462"
  },
  {
    id: "69",
    question: "¿Cuál es tu posisión favorita y por qué?",
    answers: "",
    color: "#293462"
  },
  {
    id: "70",
    question: "¿Alguna vez pensaste en engañar a tu novio / novia?",
    answers: "",
    color: "#293462"
  },
  {
    id: "71",
    question: "¿Cuál ha sido la peor fiesta a la que has ido?",
    answers: "",
    color: "#293462"
  },
  {
    id: "72",
    question: "¿Alguna vez has estado enamorado de una profesora secretamente?",
    answers: "",
    color: "#293462"
  },
  {
    id: "73",
    question:
      "¿Alguna vez resultaste atractivo para alguien del mismo sexo? ¿Qué pasó? ¿Cuál fue tu reacción?",
    answers: "",
    color: "#293462"
  },
  {
    id: "74",
    question: "¿Alguna vez te han echado de un club nocturno?",
    answers: "",
    color: "#293462"
  },
  {
    id: "75",
    question: "¿Que es lo más penoso que has tenido que hacer por sexo?",
    answers: "",
    color: "#293462"
  },
  {
    id: "76",
    question:
      "¿Qué es lo más estúpido que le has dicho a una persona que te gusta?",
    answers: "",
    color: "#293462"
  },
  {
    id: "77",
    question: "¿Alguna vez has ocultado algo de tu pareja?",
    answers: "",
    color: "#293462"
  },
  {
    id: "78",
    question: "¿Cuál fue la primera impresión que tuviste de tu pareja?",
    answers: "",
    color: "#293462"
  },
  {
    id: "79",
    question: "Has quedado en embarazo o has embarazado a alguien?",
    answers: "",
    color: "#293462"
  },
  {
    id: "80",
    question: "¿Qué es lo más atractivo de tu novio / novia?",
    answers: "",
    color: "#293462"
  },
  {
    id: "81",
    question: "¿Qué harías si tu pareja acaba la relación en este momento?",
    answers: "",
    color: "#293462"
  },
  {
    id: "82",
    question: "¿Qué palabras que no son subidas de tono te excitan?",
    answers: "",
    color: "#293462"
  }
];

export default class App extends React.Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
      currentIndexDrink: 0
    };
  }
  componentWillMount() {
    this.GenerateRandomNumber(), this.GenerateRandomNumberDrink();
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        true;
        this.GenerateRandomNumber(), this.GenerateRandomNumberDrink();
      },
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start();
        }
      }
    });
  }
  GenerateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * (81 - 0)) + 1;
    this.setState({
      currentIndex: RandomNumber
    });
  };
  GenerateRandomNumberDrink = () => {
    var RandomNumber = Math.floor(Math.random() * (5 - 0)) + 1;
    this.setState({
      currentIndexDrink: RandomNumber
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
                height: SCREEN_HEIGHT,
                width: SCREEN_WIDTH,
                position: "absolute",
                backgroundColor: "#19212E"
              }
            ]}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#19212E",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  transform: [{ rotate: "90deg" }],
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "#f0134d",
                    paddingTop: 15,
                    fontSize: 32
                  }}
                >
                  ¡MODO HOT!
                </Text>

                <Text
                  style={{
                    color: "#b2fcff",
                    paddingTop: 15,
                    fontSize: 28
                  }}
                >
                  {item.question}
                </Text>

                <Text
                  style={{
                    color: "#ffdc34",
                    paddingTop: 15,
                    fontSize: 18
                  }}
                >
                  Numero de tragos que debe beber la persona cuando termine de
                  responder{": "}
                  <Text
                    style={{
                      color: "#f0134d"
                    }}
                  >
                    {this.state.currentIndexDrink}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#f5f0e3",
                    paddingTop: 20,
                    fontSize: 14
                  }}
                >
                  Pasa el celular a la persona alado de ti para seguir el juego
                  .
                </Text>
              </View>
            </View>
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{}}></View>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
        <View style={{}}>
          <Icon
            containerStyle={{
              alignSelf: "flex-end"
            }}
            raised
            name="times-circle"
            type="font-awesome"
            color="#f50"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
