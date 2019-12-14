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
    question: "¿Describe una fantasia que tengas?"
  },
  {
    id: "1",
    question: "¿Qué es lo más loco que has hecho para tener sexo?"
  },
  {
    id: "2",
    question: "¿Cómo fue tu primera vez?"
  },
  {
    id: "3",
    question: "¿Dejarías que alguien te atara las manos y los pies a la cama?"
  },
  {
    id: "4",
    question: "¿Has sido infiel?"
  },
  {
    id: "5",
    question: "¿Quién fue la primera persona con la que tuviste sexo?"
  },
  {
    id: "6",
    question: "¿Cuál piensas que es tú mejor cualidad no física en la cama?"
  },
  {
    id: "7",
    question: "¿Has tenido sexo estando ebrio?"
  },
  {
    id: "8",
    question: "¿Te gustaría usar juguetes durante el sexo?"
  },
  {
    id: "9",
    question: "¿Cuan es la parte del cuerpo de la otra persona que te exita?"
  },
  {
    id: "10",
    question: "¿Tienes algún fetiche que quieras confesar?"
  },
  {
    id: "11",
    question:
      "¿Has practicado sexo alguna vez mientras veías una película porno?"
  },
  {
    id: "12",
    question: "¿Tienes una fantasía sexual prohibida?"
  },
  {
    id: "13",
    question: "¿Hay alguna posición sexual que te gustaría intentar?"
  },
  {
    id: "14",
    question: "¿Alguna vez has pensado en grabarse mientras tienes sexo?"
  },
  {
    id: "15",
    question: "¿En qué lugar público te gustaría hacerlo?"
  },
  {
    id: "16",
    question: "¿Tienes una página porno favorita?"
  },
  {
    id: "17",
    question:
      "¿Te gustaría que usuran o usar lencería o algún tipo de ropa en especial?"
  },
  {
    id: "18",
    question: " ¿Te gustaría probar el sadomasoquismo?"
  },
  {
    id: "19",
    question: "¿Algunas vez fingiste un orgasmo?"
  },
  {
    id: "20",
    question: "¿Bailarías sexy para alguien?"
  },
  {
    id: "21",
    question: "¿Has fantaseado con que alguien más te vea teniendo sexo?"
  },
  {
    id: "22",
    question:
      "¿Te gustaria que alguien tenga la iniciativa, o prefieres hacer tú, dar el primer paso?"
  },
  {
    id: "23",
    question:
      "¿Te gustaría que jalar o que te jalen el cabello mientras lo tienes sexo?"
  },
  {
    id: "24",
    question: "¿Te gustan los ruidos o el sexo silencioso?"
  },
  {
    id: "25",
    question: "¿Prefieres estar arriba o abajo?"
  },
  {
    id: "26",
    question: "¿Qué música podrías decir que te enciende más?"
  },
  {
    id: "27",
    question: "¿Te gusta romántico o rudo por completo?"
  },
  {
    id: "28",
    question: "¿Qué tipo de sexo jamás has practicado?"
  },
  {
    id: "29",
    question: "¿Qué es lo más sucio que has imaginado o hecho en el sexo?"
  },
  {
    id: "30",
    question: "¿Te gustaría tener sexo inmediatamente al despertar?"
  },
  {
    id: "31",
    question: "¿Te gusta el sexo oral? "
  },
  {
    id: "32",
    question: "¿Te gusta hacer o que te hagan sexo oral?"
  },
  {
    id: "33",
    question: "¿Has besado a alguno de tus amigos más cercanos? ¿Quién?"
  },
  {
    id: "34",
    question: "¿Has pensado tener un trío?"
  },
  {
    id: "35",
    question: "¿Te han sorprendido masturbándote?"
  },
  {
    id: "36",
    question: "¿Te gustan los besos con mordidas?"
  },
  {
    id: "37",
    question: "¿Te gustaría usar algún disfraz?"
  },
  {
    id: "38",
    question: "¿Qué te gusta hacer después de tener sexo?"
  },
  {
    id: "39",
    question: "¿Qué cosas te hacen llegar al orgasmo rápidamente?"
  },
  {
    id: "40",
    question:
      "¿Hay alguna parte de tu cuerpo muy específica que te gusta que te besen?"
  },
  {
    id: "41",
    question:
      "¿Alguna vez te han sorprendido en una situación comprometedora?, Cuentala "
  },
  {
    id: "42",
    question: "¿Te gustaría tener sexo por teléfono/Facetime?"
  },
  {
    id: "43",
    question:
      "Si te encuentras a tu ex en una fiesta y te pide un beso, ¿se lo darías?"
  },
  {
    id: "44",
    question: "¿Te has grabado masturbandote y se lo has mandano a alguien? "
  },
  {
    id: "45",
    question: "¿Cuál es tu fantasía sexual más deseada?"
  },
  {
    id: "46",
    question: "¿Te has sentido atraído por alguna de tus amig@s? "
  },
  {
    id: "47",
    question: "¿Cuál es el lugar más extraño donde has tenido sexo con alguien?"
  },
  {
    id: "48",
    question: "¿Qué es lo más sucio que te gustaría que alguien hiciera por ti?"
  },
  {
    id: "49",
    question: "¿Te gusta el sexting?"
  },
  {
    id: "50",
    question: "¿Tienes algún fetiche?"
  },
  {
    id: "51",

    question: "¿Hay algo que jamás te veas haciendo en la cama?"
  },
  {
    id: "52",

    question: "¿Te gustaría tener sexo en un coche?"
  },
  {
    id: "53",

    question: "¿Te gustaría hacerlo en la playa?"
  },
  {
    id: "54",

    question: "¿Tienes algún secreto sexual que te gustaría contar?"
  },
  {
    id: "55",

    question: "Haz 3 preguntas íntimas a cualquiera de los participantes"
  },
  {
    id: "56",
    question: "¿Te emociona que puedan atraparnos mientras tenemos sexo?"
  },
  {
    id: "57",
    question: "¿Te gusta dormir con ropa o desnudo despues de tener sexo?"
  },
  {
    id: "58",
    question: "¿A que edad fue tu primera vez y en que lugar?"
  },
  {
    id: "59",
    question:
      "¿Hay algún mueble con el que te gustaría experimentar nuevas posiciones? "
  },
  {
    id: "60",
    question: "¿Has intentado las posiciones del kama-sutra?"
  },
  {
    id: "61",
    question: "¿Te gustaría intentar el sexo anal?"
  },
  {
    id: "62",
    question: "¿Te gusta que te rasguñen la espalda o alguna parte del cuerpo?"
  },
  {
    id: "63",
    question: "¿Te gusta el sexo de reconciliación?"
  },
  {
    id: "64",
    question: "¿Prefieres las películas o la literatura erótica?"
  },
  {
    id: "65",
    question: "¿Encuentras el sexo como algo divertido?"
  },
  {
    id: "66",
    question: "¿Hay algo que te apague inmediatamente?"
  },
  {
    id: "67",
    question:
      "¿Te gustan las bromas mientras tenemos sexo, o prefieres todo más serio y relajado?"
  },
  {
    id: "68",
    question: "¿Cuál es tu talento especial que tengas en la cama?"
  },
  {
    id: "69",
    question: "¿Cuál es tu posisión favorita y por qué?"
  },
  {
    id: "70",
    question:
      "¿Te gusta ver una película erótica/pornográfica antes de tener sexo?"
  },
  {
    id: "71",
    question: "¿Te gustaria tener sexo con los ojos vendados?"
  },
  {
    id: "72",
    question: "¿Alguna vez has estado enamorado de una profesora secretamente?"
  },
  {
    id: "73",
    question:
      "¿Alguna vez resultaste atractivo para alguien del mismo sexo? ¿Qué pasó? ¿Cuál fue tu reacción?"
  },
  {
    id: "74",
    question: "¿Alguna vez te han echado de un club nocturno?"
  },
  {
    id: "75",
    question: "¿Qué prefieres, una cara bonita o un cuerpo sexy?"
  },
  {
    id: "76",
    question: "¿Le harías un striptease a tu pareja?"
  },
  {
    id: "77",
    question:
      "Del 1 al 10… ¿cuánta importancia le das al sexo en tus relaciones de pareja??"
  },
  {
    id: "78",
    question: "¿Has tenido sexo en un sitio público?"
  },
  {
    id: "79",
    question: "¿Qué cosas sucias te gusta que te digan durante el sexo?"
  },
  {
    id: "80",
    question: "¿Harías un 69?"
  },
  {
    id: "81",
    question: "¿Tendrías sexo con alguien al que acabas de conocer?"
  },
  {
    id: "82",
    question: "¿Qué palabras que son subidas de tono te excitan?"
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
    var RandomNumber = Math.floor(Math.random() * (81 - 0)) + 1;
    this.setState({
      currentIndex: RandomNumber
    });
  };
  GenerateRandomNumberDrink = () => {
    var RandomNumber = Math.floor(Math.random() * (3 - 0)) + 1;
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
              source={require("../../assets/Ueats.png")}
              style={{ width: 100, height: 50 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/minigo.png")}
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
              source={require("../../assets/didi.png")}
              style={{ width: 100, height: 50 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/minigo.png")}
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
              source={require("../../assets/Uber_Logo_White.png")}
              style={{ width: 100, height: 50 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/minigo.png")}
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
              source={require("../../assets/rappiwhite.png")}
              style={{ width: 100, height: 50 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/minigo.png")}
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
