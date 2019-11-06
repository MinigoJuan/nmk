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
    question:
      "Pasa al siguiente compañero que este alado de ti y pregunta a cualquier persona alguna pregunta.",
    answers:
      "si la respuesta es incorrecta la persona debera tomar los tragos que nosotros ponemos, "
  },
  {
    id: "1",
    question: "¿Cuál es el lugar más frío de la tierra?",
    answers: "La Antártida"
  },
  {
    id: "2",
    question: "¿Quién escribió La Odisea?",
    answers: "Homero."
  },
  {
    id: "3",
    question: "¿Cuál es el río más largo del mundo? ",
    answers: "Amazonas"
  },
  {
    id: "4",
    question: "¿Cómo se llama la Reina del Reino Unido?",
    answers: "Isabel II"
  },
  {
    id: "5",
    question: "¿En qué continente está Ecuador?",
    answers: "América",
    color: "#293462"
  },
  {
    id: "6",
    question: "¿Dónde originaron los juegos olímpicos?",
    answers: "Se originaron en Grecia",
    color: "#293462"
  },
  {
    id: "7",
    question: "¿Qué tipo de animal es la ballena?",
    answers: "a ballena es un mamífero marino",
    color: "#293462"
  },
  {
    id: "8",
    question: "¿De qué colores es la bandera de México? ",
    answers: "verde, blanco y rojo.",
    color: "#293462"
  },
  {
    id: "9",
    question: "¿Qué cantidad de huesos en el cuerpo humano?",
    answers: "Un adulto tiene 206",
    color: "#293462"
  },
  {
    id: "10",
    question: "¿Cuándo acabó la II Guerra Mundial?",
    answers: "La II Guerra Mundial finalizó en 1945.",
    color: "#293462"
  },
  {
    id: "11",
    question: "¿Quién es el autor de el Quijote?",
    answers: "Miguel de Cervantes.",
    color: "#293462"
  },
  {
    id: "12",
    question: "¿Quién pintó “la última cena”?",
    answers: "Leonardo da Vinci.",
    color: "#293462"
  },
  {
    id: "13",
    question: " ¿En qué país se encuentra la torre de Pisa?",
    answers: "Italia.",
    color: "#293462"
  },
  {
    id: "14",
    question: "¿Qué son los humanos: omnívoros, herbívoros o carnívoros?",
    answers: "Los humanos somos omnívoros",
    color: "#293462"
  },
  {
    id: "15",
    question: "¿Cómo se denomina el resultado de la multiplicación?",
    answers: "El resultado de la multiplicación se llama producto.",
    color: "#293462"
  },
  {
    id: "16",
    question: "¿Cuál es el océano más grande?",
    answers: "El Océano Pacífico",
    color: "#293462"
  },
  {
    id: "17",
    question: "¿Qué año llegó Cristóbal Colón a América? ",
    answers: "Cristóbal Colón llegó a América es en 1492.",
    color: "#293462"
  },
  {
    id: "18",
    question: "¿Quién es el padre del psicoanálisis?",
    answers: "Sigmund Freud",
    color: "#293462"
  },
  {
    id: "19",
    question: "¿Cuál es el disco más vendido de la historia?",
    answers: "Thriller, de Michael Jackson",
    color: "#293462"
  },
  {
    id: "20",
    question: "¿Quién es el famoso Rey de Rock en los Estados Unidos?",
    answers: "Elvis Presley",
    color: "#293462"
  },
  {
    id: "21",
    question: "¿Cómo se llama el nuevo presidente de los Estados Unidos?",
    answers: "Donald Trump.",
    color: "#293462"
  },
  {
    id: "22",
    question: "¿Qué significa FIFA?",
    answers: "Fédération Internationale de Football Association.",
    color: "#293462"
  },
  {
    id: "23",
    question: "¿En qué se especializa la cartografía?",
    answers: "Es la ciencia que estudia los mapas.",
    color: "#293462"
  },
  {
    id: "24",
    question: "¿Cuál es el país más grande del mundo?",
    answers: "Rusia",
    color: "#293462"
  },
  {
    id: "25",
    question: " ¿Dónde se encuentra la famosa Torre Eiffel?",
    answers: "París, Francia.",
    color: "#293462"
  },
  {
    id: "26",
    question: "¿Qué deporte practicaba Michael Jordan?",
    answers: "Baloncesto",
    color: "#293462"
  },
  {
    id: "27",
    question: "¿En qué año comenzó la II Guerra Mundial?",
    answers: "1939",
    color: "#293462"
  },
  {
    id: "28",
    question: "Si 50 es el 100%, ¿cuánto es el 90%?",
    answers: "El resultado de esta regla de tres es 45.",
    color: "#293462"
  },
  {
    id: "29",
    question: "¿Cuál es tercer planeta en el sistema solar?",
    answers: "La Tierra.",
    color: "#293462"
  },
  {
    id: "30",
    question: "¿Qué país tiene forma de bota?",
    answers: "Italia",
    color: "#293462"
  },
  {
    id: "31",
    question: "¿Cuál es la moneda del Reino Unido?",
    answers: "La libra ",
    color: "#293462"
  },
  {
    id: "32",
    question: "¿Cual es país más poblado de la Tierra?",
    answers: "China con 1.383.488.571",
    color: "#293462"
  },
  {
    id: "34",
    question: "¿En qué lugar del cuerpo se produce la insulina?",
    answers: "En el páncreas",
    color: "#293462"
  },
  {
    id: "35",
    question: "¿Qué rama de la Biología estudia los animales?",
    answers: "La zoología",
    color: "#293462"
  },
  {
    id: "36",
    question: "¿Cuál es el área del arte protagonista en los premios Grammy?",
    answers:
      "Se entregan como reconocimiento a los mejores músicos de cada año.",
    color: "#293462"
  },
  {
    id: "37",
    question: "¿Cómo se llama el himno nacional de Francia?",
    answers: "La Marsellesa.",
    color: "#293462"
  },
  {
    id: "38",
    question:
      "¿De qué estilo arquitectónico es la Catedral de Notre Dame en París?",
    answers: "Gótico",
    color: "#293462"
  },
  {
    id: "39",
    question: "¿Con qué se fabricaba el pergamino?",
    answers: "piel de animales.",
    color: "#293462"
  },

  {
    id: "40",
    question: "¿Cuántas patas tiene la araña?",
    answers: "8",
    color: "#293462"
  },
  {
    id: "41",
    question: "¿Cómo se llama el animal más rápido del mundo?",
    answers: "Guepardo",
    color: "#293462"
  },
  {
    id: "42",
    question: "¿Cuál es la ciudad de los rascacielos?",
    answers: "Nueva York",
    color: "#293462"
  },
  {
    id: "43",
    question: "¿De qué país es el futbolista Zlatan Ibrahimović?",
    answers: "Sueco.",
    color: "#293462"
  },
  {
    id: "44",
    question: "¿A qué país pertenecen los cariocas?",
    answers: "Brasil",
    color: "#293462"
  },
  {
    id: "45",
    question: "¿En qué país se encuentra el famoso monumento Taj Mahal?",
    answers: "India",
    color: "#293462"
  },
  {
    id: "46",
    question: "¿Cuál es el nombre de la lengua oficial en china?",
    answers: "Mandarín",
    color: "#293462"
  },
  {
    id: "47",
    question: "¿Quién va a la cárcel: el imputado, el acusado, el condenado?",
    answers: "La persona que va a la cárcel es el condenado",
    color: "#293462"
  },
  {
    id: "48",
    question:
      "¿Quién era el general de los nazis en la Segunda Guerra Mundial?",
    answers: "Adolf Hitler",
    color: "#293462"
  },
  {
    id: "49",
    question: "¿Cómo le llaman a los textos de autores desconocidos?",
    answers: "Anónimo.",
    color: "#293462"
  },
  {
    id: "50",
    question: "¿Cuál fue el primer metal que empleó el hombre?",
    answers: "El cobre.",
    color: "#293462"
  },
  {
    id: "51",
    question: "¿Qué instrumento óptico permite ver los astros de cerca?",
    answers: "Telescopio",
    color: "#293462"
  },
  {
    id: "52",
    question: "Cuál es el área del arte protagonista en los Premios Óscar?",
    answers:
      "Películas, actores, directores y, en general, a figuras del mundo del cine.",
    color: "#293462"
  },
  {
    id: "53",
    question: "¿Cuál es el primero de la lista de los números primos?",
    answers: "2",
    color: "#293462"
  },
  {
    id: "54",
    question: "¿Cuál es el único mamífero capaz de volar?",
    answers: "El murciélago ",
    color: "#293462"
  },
  {
    id: "55",
    question: "¿Cuál es el libro sagrado del Islam?",
    answers: "El corán",
    color: "#293462"
  },
  {
    id: "56",
    question: "¿Qué es más pequeño, un átomo o una molécula?",
    answers: "Un átomo tiene menores dimensiones que una molécula",
    color: "#293462"
  },
  {
    id: "57",
    question: "¿Qué era el Concorde?",
    answers: "Un avión supersónico utilizado para transportar a viajeros.",
    color: "#293462"
  },
  {
    id: "58",
    question: "¿Quién ganó el mundial de 2014?",
    answers: "Alemania",
    color: "#293462"
  },
  {
    id: "59",
    question: "¿Quién escribió “Hamlet”?",
    answers: "William Shakespeare",
    color: "#293462"
  },
  {
    id: "60",
    question: "¿Cuál es la moneda oficial de Estados Unidos?",
    answers: "En Estados Unidos se utiliza el Dólar",
    color: "#293462"
  },
  {
    id: "61",
    question: "¿A qué país pertenece la ciudad de Varsovia?",
    answers: "Polonia ",
    color: "#293462"
  },
  {
    id: "62",
    question: "¿Cuál es la nacionalidad de Pablo Neruda?",
    answers: "Chileno",
    color: "#293462"
  },
  {
    id: "63",
    question: "¿A quién le crecía la nariz cuando mentía?",
    answers: "Pinocho",
    color: "#293462"
  },
  {
    id: "64",
    question: "¿Quién traicionó a Jesús?",
    answers: "Judas ",
    color: "#293462"
  },
  {
    id: "65",
    question: "¿De qué estado fue emperador Napoleón Bonaparte?",
    answers: "Napoleón ",
    color: "#293462"
  },
  {
    id: "66",
    question:
      "¿Cómo se llama el proceso por el cual las plantas obtienen alimento?",
    answers: "Fotosíntesis",
    color: "#293462"
  },
  {
    id: "67",
    question: "¿Cómo se llama la energía contenida en el núcleo de los átomos?",
    answers: "Energía nuclear.",
    color: "#293462"
  },
  {
    id: "68",
    question: "¿Dónde está la Casa Blanca?",
    answers: "Washington D.C. Estados Unidos",
    color: "#293462"
  },
  {
    id: "69",
    question: "¿De qué está recubierto el cuerpo de los peces?",
    answers: "Las escamas",
    color: "#293462"
  },
  {
    id: "70",
    question: "¿Cuánto vale el número pi?",
    answers: "3,1416.",
    color: "#293462"
  },
  {
    id: "71",
    question: "¿Cuál es la capital de Croacia?",
    answers: "Zagreb",
    color: "#293462"
  },
  {
    id: "72",
    question: "El triángulo que tiene sus tres lados iguales ¿Cómo se llama?",
    answers: "Triángulo equilátero",
    color: "#293462"
  },
  {
    id: "73",
    question: "¿Cuáles son las notas musicales?",
    answers: "Do, re, mi, fa, sol, la, si.",
    color: "#293462"
  },
  {
    id: "74",
    question: "¿Cuál es la capital de Dinamarca?",
    answers: "Copenhague",
    color: "#293462"
  },
  {
    id: "75",
    question: "¿Quién es el protagonista de la película “Rocky”?",
    answers: "Sylvester Stallone",
    color: "#293462"
  },
  {
    id: "76",
    question: "¿De qué lengua proviene el español?",
    answers: "El castellano es una lengua que proviene del latín.",
    color: "#293462"
  },
  {
    id: "77",
    question: "¿En qué país se usó la primera bomba atómica en combate?",
    answers: "Hiroshima",
    color: "#293462"
  },
  {
    id: "78",
    question: "¿Cuál es el metal más caro del mundo?",
    answers:
      "Aunque algunos piensen que es el oro o el platino, en realidad es el rodio.",
    color: "#293462"
  },
  {
    id: "79",
    question: "¿Cuántos años tiene un lustro?",
    answers: "5 años.",
    color: "#293462"
  },
  {
    id: "80",
    question: "¿Qué es más grande un átomo o una célula?",
    answers: "Una célula tiene mayores dimensiones que un átomo.",
    color: "#293462"
  },
  {
    id: "81",
    question: "¿Dónde se encuentra la capa de ozono?",
    answers: "En la atmósfera.",
    color: "#293462"
  },
  {
    id: "82",
    question: "¿Quién “sabía que no sabía nada”?",
    answers:
      " se atribuye a Sócrates, pero fue Platón quien la recogió por primera vez",
    color: "#293462"
  },
  {
    id: "83",
    question: "¿Qué es un ovíparo?",
    answers: "Un ovíparo es un un animal que nace de un huevo.",
    color: "#293462"
  },
  {
    id: "84",
    question: "¿Cuál es la capital de Francia?",
    answers: "París",
    color: "#293462"
  },
  {
    id: "85",
    question: "¿Cuándo empezó la Primera Guerra Mundial?",
    answers: "1914",
    color: "#293462"
  },
  {
    id: "86",
    question: "¿Qué deporte practica profesionalmente Roger Federer?",
    answers: "Tenis ",
    color: "#293462"
  },
  {
    id: "87",
    question: " ¿Qué es un animal carnívoro?",
    answers: "Carnívoro es aquel animal que come carne.",
    color: "#293462"
  },
  {
    id: "88",
    question: "¿Cómo se llama el procedimiento de subir la bandera?",
    answers: "Izar.",
    color: "#293462"
  },
  {
    id: "89",
    question: "¿Cómo se llama el estadio del F.C. Barcelona?",
    answers: "Camp Nou",
    color: "#293462"
  },
  {
    id: "90",
    question: "¿Cómo se llama el fundador de Facebook?",
    answers: "Mark Zuckerberg",
    color: "#293462"
  },
  {
    id: "91",
    question: "¿Cómo se llama el pokemon amarillo de ash?",
    answers: "Pikachu",
    color: "#293462"
  },
  {
    id: "92",
    question: "¿Cuál es el país con más camellos salvajes?",
    answers: "Australia",
    color: "#293462"
  },
  {
    id: "93",
    question: "¿Cuántos corazones tienen los pulpos?",
    answers: "3 corazones.",
    color: "#293462"
  },
  {
    id: "94",
    question: "¿Existen animales inmortales?",
    answers:
      "Técnicamente sí: la medusa Turritopsis nutricula no muere a no ser que la maten o sufra un accidente.",
    color: "#293462"
  },
  {
    id: "95",
    question: "¿En qué ciudad ucraniana ocurrió un desastre nuclear?",
    answers: "En Prípiat. Chernobyl",
    color: "#293462"
  },
  {
    id: "96",
    question:
      "¿Cómo se llama la civilización que construyó las pirámides de Giza?",
    answers: "Los egipcios.",
    color: "#293462"
  },
  {
    id: "97",
    question:
      "¿Cómo se llaman los protagonistas de la película “Titanic” de James Cameron?",
    answers: "Jack Dawson y Rose DeWitt Bukater.",
    color: "#293462"
  },
  {
    id: "98",
    question: "¿Cuál es el planeta más grande del Sistema Solar?",
    answers: "Júpiter",
    color: "#293462"
  },
  {
    id: "99",
    question: "¿Cuál es el animal más grande que habita la Tierra?",
    answers: "La ballena azul.",
    color: "#293462"
  },
  {
    id: "100",
    question: "¿Es el ornitorrinco un ave, reptil, pez o mamífero?",
    answers: "Un mamífero."
  },
  {
    id: "101",
    question:
      "¿Qué personaje de William Shakespeare dijo: “Ser o no ser, esa es la cuestión”?",
    answers: "El Príncipe de Dinamarca, Hamlet."
  },
  {
    id: "102",
    question: "¿¿En qué país se encuentra ubicada la Casa Rosada?",
    answers: " En Argentina."
  },
  {
    id: "103",
    question: "¿Cuál es la nación más pequeña del mundo?",
    answers: "El Vaticano"
  },
  {
    id: "104",
    question: "¿Cuál es la ciudad italiana conocida como “la novia del mar”?",
    answers: "Venecia."
  },
  {
    id: "105",
    question: "¿Cuál fue el primer hombre en ir a la luna?",
    answers: " Neil Armstrong"
  },
  {
    id: "106",
    question:
      "¿De qué año es la primera constitución española conocida como “La Pepa”?",
    answers: "1812."
  },
  {
    id: "107",
    question: "¿Quién fue el primer emperador romano?",
    answers: "César Augusto."
  },
  {
    id: "108",
    question: "¿Cuantos Estados hay en México?",
    answers: "31 Y la Ciudad de México"
  },
  {
    id: "109",
    question: "¿Quién escribió Cien años de soledad?",
    answers: "Gabriel García Márquez."
  },
  {
    id: "110",
    question:
      " ¿Cuál es el elemento químico más abundante en la corteza terrestre?",
    answers: "Oxígeno"
  },
  {
    id: "111",
    question: "¿Cuál es el primer elemento de la Tabla periódica?",
    answers: "Hidrógeno."
  },
  {
    id: "112",
    question: "¿Cuál es la rama de la biología que estudia las plantas?",
    answers: "Botánica."
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
    var RandomNumber = Math.floor(Math.random() * (111 - 0)) + 1;
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
                position: "absolute"
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
                    color: "#ffdc34",
                    fontSize: 21
                  }}
                >
                  PREGUNTA
                </Text>
                <Text
                  style={{
                    color: "#ffdc34",
                    paddingTop: 15,
                    fontSize: 21
                  }}
                >
                  {item.question}
                </Text>
                <Text
                  style={{
                    color: "#4dd599",
                    paddingTop: 15,
                    fontSize: 21
                  }}
                >
                  RESPUESTA
                </Text>
                <Text
                  style={{
                    color: "#4dd599",
                    paddingTop: 15,
                    fontSize: 21
                  }}
                >
                  {item.answers}
                </Text>

                <Text
                  style={{
                    color: "#f45905",
                    paddingTop: 15,
                    fontSize: 21
                  }}
                >
                  Si la respuesta es incorrecta la persona bebera
                  <Text> {this.state.currentIndexDrink} tragos</Text>
                </Text>
                <Text
                  style={{
                    color: "#f5f0e3",
                    paddingTop: 20,
                    fontSize: 14
                  }}
                >
                  Pasa el celular a la persona alado de ti para seguir el juego.
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
