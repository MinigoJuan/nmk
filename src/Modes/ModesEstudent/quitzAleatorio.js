import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  Clipboard,
  Alert
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import { Overlay, Icon, Button } from "react-native-elements";
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
    answers: "América"
  },
  {
    id: "6",
    question: "¿Dónde originaron los juegos olímpicos?",
    answers: "Se originaron en Grecia"
  },
  {
    id: "7",
    question: "¿Qué tipo de animal es la ballena?",
    answers: "a ballena es un mamífero marino"
  },
  {
    id: "8",
    question: "¿De qué colores es la bandera de México? ",
    answers: "verde, blanco y rojo."
  },
  {
    id: "9",
    question: "¿Qué cantidad de huesos en el cuerpo humano?",
    answers: "Un adulto tiene 206"
  },
  {
    id: "10",
    question: "¿Cuándo acabó la II Guerra Mundial?",
    answers: "La II Guerra Mundial finalizó en 1945."
  },
  {
    id: "11",
    question: "¿Quién es el autor de el Quijote?",
    answers: "Miguel de Cervantes."
  },
  {
    id: "12",
    question: "¿Quién pintó “la última cena”?",
    answers: "Leonardo da Vinci."
  },
  {
    id: "13",
    question: " ¿En qué país se encuentra la torre de Pisa?",
    answers: "Italia."
  },
  {
    id: "14",
    question: "¿Qué son los humanos: omnívoros, herbívoros o carnívoros?",
    answers: "Los humanos somos omnívoros"
  },
  {
    id: "15",
    question: "¿Cómo se denomina el resultado de la multiplicación?",
    answers: "El resultado de la multiplicación se llama producto."
  },
  {
    id: "16",
    question: "¿Cuál es el océano más grande?",
    answers: "El Océano Pacífico"
  },
  {
    id: "17",
    question: "¿Qué año llegó Cristóbal Colón a América? ",
    answers: "Cristóbal Colón llegó a América es en 1492."
  },
  {
    id: "18",
    question: "¿Quién es el padre del psicoanálisis?",
    answers: "Sigmund Freud"
  },
  {
    id: "19",
    question: "¿Cuál es el disco más vendido de la historia?",
    answers: "Thriller, de Michael Jackson"
  },
  {
    id: "20",
    question: "¿Quién es el famoso Rey de Rock en los Estados Unidos?",
    answers: "Elvis Presley"
  },
  {
    id: "21",
    question: "¿Cómo se llama el nuevo presidente de los Estados Unidos?",
    answers: "Donald Trump."
  },
  {
    id: "22",
    question: "¿Qué significa FIFA?",
    answers: "Fédération Internationale de Football Association."
  },
  {
    id: "23",
    question: "¿En qué se especializa la cartografía?",
    answers: "Es la ciencia que estudia los mapas."
  },
  {
    id: "24",
    question: "¿Cuál es el país más grande del mundo?",
    answers: "Rusia"
  },
  {
    id: "25",
    question: " ¿Dónde se encuentra la famosa Torre Eiffel?",
    answers: "París, Francia."
  },
  {
    id: "26",
    question: "¿Qué deporte practicaba Michael Jordan?",
    answers: "Baloncesto"
  },
  {
    id: "27",
    question: "¿En qué año comenzó la II Guerra Mundial?",
    answers: "1939"
  },
  {
    id: "28",
    question: "Si 50 es el 100%, ¿cuánto es el 90%?",
    answers: "El resultado de esta regla de tres es 45."
  },
  {
    id: "29",
    question: "¿Cuál es tercer planeta en el sistema solar?",
    answers: "La Tierra."
  },
  {
    id: "30",
    question: "¿Qué país tiene forma de bota?",
    answers: "Italia"
  },
  {
    id: "31",
    question: "¿Cuál es la moneda del Reino Unido?",
    answers: "La libra "
  },
  {
    id: "32",
    question: "¿Cual es país más poblado de la Tierra?",
    answers: "China con 1.383.488.571"
  },
  {
    id: "34",
    question: "¿En qué lugar del cuerpo se produce la insulina?",
    answers: "En el páncreas"
  },
  {
    id: "35",
    question: "¿Qué rama de la Biología estudia los animales?",
    answers: "La zoología"
  },
  {
    id: "36",
    question: "¿Cuál es el área del arte protagonista en los premios Grammy?",
    answers:
      "Se entregan como reconocimiento a los mejores músicos de cada año."
  },
  {
    id: "37",
    question: "¿Cómo se llama el himno nacional de Francia?",
    answers: "La Marsellesa."
  },
  {
    id: "38",
    question:
      "¿De qué estilo arquitectónico es la Catedral de Notre Dame en París?",
    answers: "Gótico"
  },
  {
    id: "39",
    question: "¿Con qué se fabricaba el pergamino?",
    answers: "piel de animales."
  },

  {
    id: "40",
    question: "¿Cuántas patas tiene la araña?",
    answers: "8"
  },
  {
    id: "41",
    question: "¿Cómo se llama el animal más rápido del mundo?",
    answers: "Guepardo"
  },
  {
    id: "42",
    question: "¿Cuál es la ciudad de los rascacielos?",
    answers: "Nueva York"
  },
  {
    id: "43",
    question: "¿De qué país es el futbolista Zlatan Ibrahimović?",
    answers: "Sueco."
  },
  {
    id: "44",
    question: "¿A qué país pertenecen los cariocas?",
    answers: "Brasil"
  },
  {
    id: "45",
    question: "¿En qué país se encuentra el famoso monumento Taj Mahal?",
    answers: "India"
  },
  {
    id: "46",
    question: "¿Cuál es el nombre de la lengua oficial en china?",
    answers: "Mandarín"
  },
  {
    id: "47",
    question: "¿Quién va a la cárcel: el imputado, el acusado, el condenado?",
    answers: "La persona que va a la cárcel es el condenado"
  },
  {
    id: "48",
    question:
      "¿Quién era el general de los nazis en la Segunda Guerra Mundial?",
    answers: "Adolf Hitler"
  },
  {
    id: "49",
    question: "¿Cómo le llaman a los textos de autores desconocidos?",
    answers: "Anónimo."
  },
  {
    id: "50",
    question: "¿Cuál fue el primer metal que empleó el hombre?",
    answers: "El cobre."
  },
  {
    id: "51",
    question: "¿Qué instrumento óptico permite ver los astros de cerca?",
    answers: "Telescopio"
  },
  {
    id: "52",
    question: "Cuál es el área del arte protagonista en los Premios Óscar?",
    answers:
      "Películas, actores, directores y, en general, a figuras del mundo del cine."
  },
  {
    id: "53",
    question: "¿Cuál es el primero de la lista de los números primos?",
    answers: "2"
  },
  {
    id: "54",
    question: "¿Cuál es el único mamífero capaz de volar?",
    answers: "El murciélago "
  },
  {
    id: "55",
    question: "¿Cuál es el libro sagrado del Islam?",
    answers: "El corán"
  },
  {
    id: "56",
    question: "¿Qué es más pequeño, un átomo o una molécula?",
    answers: "Un átomo tiene menores dimensiones que una molécula"
  },
  {
    id: "57",
    question: "¿Qué era el Concorde?",
    answers: "Un avión supersónico utilizado para transportar a viajeros."
  },
  {
    id: "58",
    question: "¿Quién ganó el mundial de 2014?",
    answers: "Alemania"
  },
  {
    id: "59",
    question: "¿Quién escribió “Hamlet”?",
    answers: "William Shakespeare"
  },
  {
    id: "60",
    question: "¿Cuál es la moneda oficial de Estados Unidos?",
    answers: "En Estados Unidos se utiliza el Dólar"
  },
  {
    id: "61",
    question: "¿A qué país pertenece la ciudad de Varsovia?",
    answers: "Polonia "
  },
  {
    id: "62",
    question: "¿Cuál es la nacionalidad de Pablo Neruda?",
    answers: "Chileno"
  },
  {
    id: "63",
    question: "¿A quién le crecía la nariz cuando mentía?",
    answers: "Pinocho"
  },
  {
    id: "64",
    question: "¿Quién traicionó a Jesús?",
    answers: "Judas "
  },
  {
    id: "65",
    question: "¿De qué estado fue emperador Napoleón Bonaparte?",
    answers: "Napoleón "
  },
  {
    id: "66",
    question:
      "¿Cómo se llama el proceso por el cual las plantas obtienen alimento?",
    answers: "Fotosíntesis"
  },
  {
    id: "67",
    question: "¿Cómo se llama la energía contenida en el núcleo de los átomos?",
    answers: "Energía nuclear."
  },
  {
    id: "68",
    question: "¿Dónde está la Casa Blanca?",
    answers: "Washington D.C. Estados Unidos"
  },
  {
    id: "69",
    question: "¿De qué está recubierto el cuerpo de los peces?",
    answers: "Las escamas"
  },
  {
    id: "70",
    question: "¿Cuánto vale el número pi?",
    answers: "3,1416."
  },
  {
    id: "71",
    question: "¿Cuál es la capital de Croacia?",
    answers: "Zagreb"
  },
  {
    id: "72",
    question: "El triángulo que tiene sus tres lados iguales ¿Cómo se llama?",
    answers: "Triángulo equilátero"
  },
  {
    id: "73",
    question: "¿Cuáles son las notas musicales?",
    answers: "Do, re, mi, fa, sol, la, si."
  },
  {
    id: "74",
    question: "¿Cuál es la capital de Dinamarca?",
    answers: "Copenhague"
  },
  {
    id: "75",
    question: "¿Quién es el protagonista de la película “Rocky”?",
    answers: "Sylvester Stallone"
  },
  {
    id: "76",
    question: "¿De qué lengua proviene el español?",
    answers: "El castellano es una lengua que proviene del latín."
  },
  {
    id: "77",
    question: "¿En qué país se usó la primera bomba atómica en combate?",
    answers: "Hiroshima"
  },
  {
    id: "78",
    question: "¿Cuál es el metal más caro del mundo?",
    answers:
      "Aunque algunos piensen que es el oro o el platino, en realidad es el rodio."
  },
  {
    id: "79",
    question: "¿Cuántos años tiene un lustro?",
    answers: "5 años."
  },
  {
    id: "80",
    question: "¿Qué es más grande un átomo o una célula?",
    answers: "Una célula tiene mayores dimensiones que un átomo."
  },
  {
    id: "81",
    question: "¿Dónde se encuentra la capa de ozono?",
    answers: "En la atmósfera."
  },
  {
    id: "82",
    question: "¿Quién “sabía que no sabía nada”?",
    answers:
      " se atribuye a Sócrates, pero fue Platón quien la recogió por primera vez"
  },
  {
    id: "83",
    question: "¿Qué es un ovíparo?",
    answers: "Un ovíparo es un un animal que nace de un huevo."
  },
  {
    id: "84",
    question: "¿Cuál es la capital de Francia?",
    answers: "París"
  },
  {
    id: "85",
    question: "¿Cuándo empezó la Primera Guerra Mundial?",
    answers: "1914"
  },
  {
    id: "86",
    question: "¿Qué deporte practica profesionalmente Roger Federer?",
    answers: "Tenis "
  },
  {
    id: "87",
    question: " ¿Qué es un animal carnívoro?",
    answers: "Carnívoro es aquel animal que come carne."
  },
  {
    id: "88",
    question: "¿Cómo se llama el procedimiento de subir la bandera?",
    answers: "Izar."
  },
  {
    id: "89",
    question: "¿Cómo se llama el estadio del F.C. Barcelona?",
    answers: "Camp Nou"
  },
  {
    id: "90",
    question: "¿Cómo se llama el fundador de Facebook?",
    answers: "Mark Zuckerberg"
  },
  {
    id: "91",
    question: "¿Cómo se llama el pokemon amarillo de ash?",
    answers: "Pikachu"
  },
  {
    id: "92",
    question: "¿Cuál es el país con más camellos salvajes?",
    answers: "Australia"
  },
  {
    id: "93",
    question: "¿Cuántos corazones tienen los pulpos?",
    answers: "3 corazones."
  },
  {
    id: "94",
    question: "¿Existen animales inmortales?",
    answers:
      "Técnicamente sí: la medusa Turritopsis nutricula no muere a no ser que la maten o sufra un accidente."
  },
  {
    id: "95",
    question: "¿En qué ciudad ucraniana ocurrió un desastre nuclear?",
    answers: "En Prípiat. Chernobyl"
  },
  {
    id: "96",
    question:
      "¿Cómo se llama la civilización que construyó las pirámides de Giza?",
    answers: "Los egipcios."
  },
  {
    id: "97",
    question:
      "¿Cómo se llaman los protagonistas de la película “Titanic” de James Cameron?",
    answers: "Jack Dawson y Rose DeWitt Bukater."
  },
  {
    id: "98",
    question: "¿Cuál es el planeta más grande del Sistema Solar?",
    answers: "Júpiter"
  },
  {
    id: "99",
    question: "¿Cuál es el animal más grande que habita la Tierra?",
    answers: "La ballena azul."
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
  },
  {
    id: "113",
    question: "¿Cuáles son los cinco continentes?",
    answers: "Europa, Asia, Oceanía, Antártida y América."
  },
  {
    id: "114",
    question: "¿Cuántos colores tiene el arcoíris?",
    answers:
      "Rojo, naranja, amarillo, verde, azul, añil y violeta. Los colores de los que se compone un rayo de luz."
  },
  {
    id: "115",
    question: "¿En qué año llegaron a la luna?",
    answers: "1969."
  },
  {
    id: "116",
    question: "¿Qué animal mata más humanos al año?",
    answers: "Curiosamente, el mosquito, a través del contagio de enfermedades."
  },
  {
    id: "117",
    question: "¿¿En qué año cayó el muro de Berlín?",
    answers: "1989."
  },
  {
    id: "118",
    question: "¿Quién escribió ‘El Principito’?",
    answers: "Antoine de Saint-Exupéry."
  },
  {
    id: "119",
    question: "¿Cuál fue la primera película de Disney?",
    answers:
      "El primer largometraje de la compañía vio la luz en 1937, y fue ‘Blancanieves’."
  },
  {
    id: "120",
    question: "¿Quien formuló la Teoría de la Relatividad?",
    answers: "El físico alemán Albert Einstein."
  },
  {
    id: "121",
    question: "¿Y quién propuso las leyes del movimiento?",
    answers: "Isaac Newton."
  },
  {
    id: "122",
    question: "¿Cuál es la película más taquillera de la historia?",
    answers: "Vengadores: Endgame."
  },
  {
    id: "123",
    question: "¿En qué galaxia se encuentra la Tierra?",
    answers: "En la Vía Láctea."
  },
  {
    id: "124",
    question: "¿A qué temperatura hierve el agua?",
    answers: "A cien grados centígrados."
  },
  {
    id: "125",
    question: "¿Qué río pasa por Londres?",
    answers: "El Támesis."
  },
  {
    id: "126",
    question: "¿Cuántas vocales hay en un diptongo?",
    answers: "Dos."
  }
];

export default class App extends React.Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
      currentIndexDrink: 0,
      isVisibleUE: false,
      isVisibleDIDI: false,
      isVisibleUber: false,
      isVisibleRappi: false
    };
  }
  onCloseIcon = () => {
    this.setState({
      isVisibleUE: false,
      isVisibleDIDI: false,
      isVisibleUber: false,
      isVisibleRappi: false
    });
  };
  componentWillMount() {
    setTimeout(
      function() {
        this.setState({ isVisibleUE: true });
      }.bind(this),
      480000
    );

    setTimeout(
      function() {
        this.setState({ isVisibleDIDI: true });
      }.bind(this),
      720000
    );
    setTimeout(
      function() {
        this.setState({ isVisibleUber: true });
      }.bind(this),
      60000
    );
    setTimeout(
      function() {
        this.setState({ isVisibleRappi: true });
      }.bind(this),
      240000
    );
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
  componentWillUnmount = () => {
    console.log("unready");

    this.setState({
      isVisibleUE: false,
      isVisibleDIDI: false,
      isVisibleUber: false,
      isVisibleRappi: false
    });
  };
  clipborUE = () => {
    Clipboard.setString("eats-9loxl5");
    Alert.alert("Código copiado", "Utilizalo en Uber Eats", [{ text: "OK" }]);
  };
  clipborDIDI = () => {
    Clipboard.setString("MXJ9VMGS");
    Alert.alert("Código copiado", "Utilizalo en DiDi", [{ text: "OK" }]);
  };
  clipborUber = () => {
    Clipboard.setString("9loxl5");
    Alert.alert("Código copiado", "Utilizalo en Uber", [{ text: "OK" }]);
  };
  clipborRappi = () => {
    Clipboard.setString("b9w25665237");
    Alert.alert("Código copiado", "Utilizalo en Rappi", [{ text: "OK" }]);
  };
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
                    paddingTop: 10,
                    fontSize: 21
                  }}
                >
                  {item.question}
                </Text>
                <Text
                  style={{
                    color: "#4dd599",
                    paddingTop: 10,
                    fontSize: 21
                  }}
                >
                  RESPUESTA
                </Text>
                <Text
                  style={{
                    color: "#4dd599",
                    paddingTop: 10,
                    fontSize: 21
                  }}
                >
                  {item.answers}
                </Text>

                <Text
                  style={{
                    color: "#f45905",
                    paddingTop: 10,
                    fontSize: 21
                  }}
                >
                  Si la respuesta es incorrecta la persona bebera
                  <Text> {this.state.currentIndexDrink} tragos</Text>
                </Text>
                <Text
                  style={{
                    color: "#f5f0e3",
                    paddingTop: 15,
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
        <Overlay
          isVisible={this.state.isVisibleUE}
          windowBackgroundColor="#19212E"
          overlayBackgroundColor="#3c3d47"
          width={300}
          height={300}
          overlayStyle={styles.styOver}
          onBackdropPress={() => this.onCloseIcon()}
        >
          <Icon
            raised
            size={15}
            name="close"
            type="evilicon"
            color="#517fa4"
            containerStyle={styles.styIcon}
            onPress={this.onCloseIcon}
          />

          <View style={styles.textView}>
            <Text style={styles.styh2}>Te regalamos:</Text>
            <Text style={styles.costos}>
              $100 <Text style={styles.styh3}>en tu primer pedido</Text>
            </Text>
            <Text style={styles.costos}>
              <Text style={styles.styh3}>en Uber Eats.</Text>
            </Text>
          </View>
          <Text style={{ fontSize: 20, color: "white" }}>Cupón:</Text>
          <View style={styles.styPromo}>
            <Text onPress={this.clipborUE} style={styles.styTextPromo}>
              eats-9loxl5
            </Text>
          </View>
          <View style={styles.styImages}>
            <Image
              source={require("../../../assets/Ueats.png")}
              style={{ width: 100, height: 50 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../../assets/minigo.png")}
              style={{ width: 110, height: 45 }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.styh4}>
            *Valido en tu primera compra en Uber Eats
          </Text>
        </Overlay>
        <Overlay
          isVisible={this.state.isVisibleDIDI}
          windowBackgroundColor="#19212E"
          overlayBackgroundColor="#eae9e9"
          width={300}
          height={300}
          overlayStyle={styles.styOver}
          onBackdropPress={() => this.onCloseIcon()}
        >
          <Icon
            raised
            size={15}
            name="close"
            type="evilicon"
            color="#517fa4"
            containerStyle={styles.styIcon}
            onPress={this.onCloseIcon}
          />

          <View style={styles.textView}>
            <Text style={{ fontSize: 18, marginBottom: 3, color: "#202040" }}>
              Te regalamos:
            </Text>
            <Text style={styles.costos}>
              50%{" "}
              <Text style={{ fontSize: 18, marginBottom: 3, color: "#202040" }}>
                de descuento en
              </Text>
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 3, color: "#202040" }}>
              tus primeros viajes.
            </Text>
          </View>
          <Text style={{ fontSize: 20, color: "#202040" }}>Cupón:</Text>
          <View
            style={{
              marginTop: 8,
              marginBottom: 8,
              borderRadius: 2,
              borderWidth: 0.5,
              borderColor: "#202040"
            }}
          >
            <Text
              onPress={this.clipborDIDI}
              style={{
                margin: 4,
                color: "#202040",
                fontSize: 25,
                fontStyle: "normal"
              }}
            >
              MXJ9VMGS
            </Text>
          </View>
          <View style={styles.styImages}>
            <Image
              source={require("../../../assets/didi.png")}
              style={{ width: 100, height: 50 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../../assets/minigo.png")}
              style={{ width: 110, height: 45 }}
              resizeMode="contain"
            />
          </View>
          <Text style={{ fontSize: 9, marginBottom: 3, color: "#202040" }}>
            *Valido en tu primeros viajes en DIDI.
          </Text>
        </Overlay>
        <Overlay
          isVisible={this.state.isVisibleUber}
          windowBackgroundColor="#19212E"
          overlayBackgroundColor="#3c3d47"
          width={300}
          height={300}
          overlayStyle={styles.styOver}
          onBackdropPress={() => this.onCloseIcon()}
        >
          <Icon
            raised
            size={15}
            name="close"
            type="evilicon"
            color="#517fa4"
            containerStyle={styles.styIcon}
            onPress={this.onCloseIcon}
          />

          <View style={styles.textView}>
            <Text style={styles.styh2}>Te regalamos:</Text>
            <Text style={styles.costos}>
              50% <Text style={styles.styh3}> de descuento en tus </Text>
            </Text>
            <Text style={styles.costos}>
              <Text style={styles.styh3}>primeros 3 viajes. </Text>
            </Text>
          </View>
          <Text style={{ fontSize: 20, color: "white" }}>Cupón:</Text>
          <View style={styles.styPromo}>
            <Text onPress={this.clipborUber} style={styles.styTextPromo}>
              9loxl5
            </Text>
          </View>
          <View style={styles.styImages}>
            <Image
              source={require("../../../assets/Uber_Logo_White.png")}
              style={{ width: 100, height: 50 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../../assets/minigo.png")}
              style={{ width: 110, height: 45 }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.styh4}>
            *Valido en tu primeros viajes en UBER
          </Text>
        </Overlay>
        <Overlay
          isVisible={this.state.isVisibleRappi}
          windowBackgroundColor="#19212E"
          overlayBackgroundColor="#FD6152"
          width={300}
          height={300}
          overlayStyle={styles.styOver}
          onBackdropPress={() => this.onCloseIcon()}
        >
          <Icon
            raised
            size={15}
            name="close"
            type="evilicon"
            color="#517fa4"
            containerStyle={styles.styIcon}
            onPress={this.onCloseIcon}
          />

          <View style={styles.textView}>
            <Text style={styles.styh2}>Te regalamos:</Text>
            <Text style={styles.costos}>
              $100 <Text style={styles.styh3}>en tu primer pedido y</Text>
            </Text>
            <Text style={styles.costos}>
              $600 <Text style={styles.styh3}>en costos de envio</Text>
            </Text>
          </View>
          <Text style={{ fontSize: 20, color: "white" }}>Cupón:</Text>
          <View style={styles.styPromo}>
            <Text onPress={this.clipborRappi} style={styles.styTextPromo}>
              b9w25665237
            </Text>
          </View>
          <View style={styles.styImages}>
            <Image
              source={require("../../../assets/rappiwhite.png")}
              style={{ width: 100, height: 50 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../../assets/minigo.png")}
              style={{ width: 110, height: 45 }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.styh4}>
            *Valido en tu primera compra en RAPPI
          </Text>
        </Overlay>
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
  },
  styOver: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  styIcon: {
    alignSelf: "flex-end"
  },
  styTextPromo: {
    margin: 4,
    color: "white",
    fontSize: 25,
    fontStyle: "normal"
  },
  costos: {
    color: "#FEC20A",
    fontSize: 20
  },
  styPromo: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: "white"
  },
  styh2: {
    fontSize: 18,
    marginBottom: 3,
    color: "#fffdf9"
  },
  styh3: {
    fontSize: 14,
    marginBottom: 3,
    color: "#fffdf9"
  },
  styh4: {
    fontSize: 9,
    marginBottom: 3,
    color: "#fffdf9"
  },
  styImages: { flexDirection: "row", marginTop: 7 },
  codeRappi: {
    fontSize: 18,
    marginBottom: 3,
    color: "#fffdf9"
  },
  textView: {
    alignItems: "center",
    marginBottom: 6
  }
});
