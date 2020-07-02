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
  Alert,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import { Overlay, Icon, Button } from "react-native-elements";
const Users = [
  {
    id: "0",
    question: "",
  },
  {
    id: "1",
    question:
      "ponle un reto a cualquiera de esta mesa, sino lo hace tendra que tomar ",
  },
  {
    id: "2",
    question: "si tienes Novia o Novio tendras que tomar ",
  },
  {
    id: "3",
    question: "elije al más listo de la mesa y tendra que tomar ",
  },
  {
    id: "4",
    question: "canta una canción de reggaeton sino toma ",
  },
  {
    id: "5",
    question: "si has hecho beso de 3 tendras que tomar ",
  },
  {
    id: "6",
    question:
      "obliga a un amigo a que le mande un mensaje a su ex, sino lo hace el tomara ",
  },
  {
    id: "7",
    question:
      "publica en un estado de Facebook el nombre de tu Crush o tendras que tomar ",
  },
  {
    id: "8",
    question: "elije a la persona más inteligente y tendra que beber ",
  },
  {
    id: "9",
    question: "si traes una camisa tendras que beber ",
  },
  {
    id: "10",
    question: "elije a le persona más joven y esta tendra que beber ",
  },
  {
    id: "11",
    question: "elije a la persona con más bebida y tendra que beber ",
  },
  {
    id: "12",
    question:
      "elije a la persona más complicada en el amor y tendra que beber ",
  },
  {
    id: "13",
    question:
      "declarate tu amor a la persona que te gusta, sino tendras que beber ",
  },
  {
    id: "14",
    question: "si traes tenis tendras que beber ",
  },
  {
    id: "15",
    question: "reparte a 3 personas y estas tendran que beber ",
  },
  { id: "16", question: "si aun no estas borracho, tienes que beber" },
  {
    id: "17",
    question: "si mañana tienes que ir a la escuela bebe ",
  },
  {
    id: "18",
    question: "si estabas borracho ayer, tienes que repartir ",
  },
  {
    id: "19",
    question: "si tienes un accesorio negro, tienes que beber ",
  },
  {
    id: "20",
    question: "elije a la persona que tenga un accesorio azul y reparte ",
  },
  {
    id: "21",
    question: "si nunca has visto una pelicula de Marvel, bebe ",
  },
  {
    id: "22",
    question: "si algun dia haz sido infiel, tendras que beber ",
  },
  {
    id: "23",
    question: "si estas bebiendo tequila, tendras que beber ",
  },
  {
    id: "24",
    question: "si alguna vez has tenido sexo con alguien mayor de edad, bebe ",
  },
  {
    id: "25",
    question:
      "obliga a un amigo a que le mande mensaje a su novia diciendo ´Esto no esta funcionando´, sino bebe  ",
  },
  {
    id: "26",
    question: "si tienes tu bebida llena, tendras que tomar ",
  },
  {
    id: "27",
    question:
      "juega, Caricachupas presenta nombres de Marcas de Cigarros, quien se equivoque tendra que beber ",
  },
  {
    id: "28",
    question:
      "reta a quién quieras a una guerra de pulgares, quien pierda tendra que beber ",
  },
  {
    id: "29",
    question:
      "elije una palabra, la primera persona que cante el principio de una canción que contenga la canción, reparte ",
  },
  {
    id: "30",
    question: "el jugador del lado izquierdo tuyo, tendra que beber ",
  },
  {
    id: "31",
    question: "elege a los mas carismaticos y repartir ",
  },

  {
    id: "32",
    question: "si la persona que te gusta esta presente en este momento, bebe ",
  },
  {
    id: "33",
    question: "si traes un Iphone, tendras que beber ",
  },
  {
    id: "34",
    question: "si eres soltero, tendras que beber ",
  },
  {
    id: "35",
    question: "elije al jugador mas peludo, y tendra que tomar ",
  },
  {
    id: "36",
    question: "elije a un amigo y este tendra que tomar ",
  },
  {
    id: "37",
    question: "elije al jugador más calvo o pelón y dale ",
  },
  {
    id: "38",
    question: "si tu telefono es Android, tendras que beber ",
  },
  {
    id: "39",
    question: "canta una canción de banda, sino tendras que tomar ",
  },

  {
    id: "40",
    question: "elije al jugador mas ligador y repartele ",
  },
  {
    id: "41",
    question: "si ya estas borracho, reparteles a todos tus amigos ",
  },
  {
    id: "42",
    question:
      "Nombres de canciones que comiencen con la letra G, quien se equivoque bebe ",
  },
  {
    id: "43",
    question: "juega ´Yo nunca nunca he´, o todos beban ",
  },
  {
    id: "44",
    question: "elije a la persona que haya llegado al final, y repartele ",
  },
  {
    id: "45",
    question: "reparte a todas las personas que tengan su telefono afuera  ",
  },
  {
    id: "46",
    question: "elije a la persona más carismatica y tendra que beber ",
  },
  {
    id: "47",
    question:
      "di el nombre de la persona que te gusta en este momento, sino tendras que beber ",
  },
  {
    id: "48",
    question: "toma una foto y publicala en un estado en instagram o bebe ",
  },
  {
    id: "49",
    question: "elije al jugador más tonto y tendra que repartir ",
  },
  {
    id: "50",
    question: "si extrañas a tu ex, entonces bebe ",
  },
  {
    id: "51",
    question: "si has tenido sueños eróticos en esta semana, bebe ",
  },
  {
    id: "52",
    question:
      "pon un reto, los que lleguen a tocarse la nariz con la lengua, reparten ",
  },
  {
    id: "53",
    question: "elije al GAMER de la mesa y repartele ",
  },
  {
    id: "54",
    question: "si la ultima pelicula que hayas visto ha sido romantica bebe ",
  },
  {
    id: "55",
    question: "si tu pareja esta presente, los 2 tendran que tomar ",
  },
  {
    id: "56",
    question: "confiesa algo que te haya pasado en la cama, sino bebe ",
  },
  {
    id: "57",
    question:
      "elije a la persona que tenga el mejor cuerpo, y tendra que beber ",
  },
  {
    id: "58",
    question: "elije a la persona mas borracha y repartele  ",
  },
  {
    id: "59",
    question: "si alguna vez has grabado TikToks, tendras que beber ",
  },
  {
    id: "60",
    question:
      "elije al jugador que siempre se emborracha primero y repartirle ",
  },
  {
    id: "61",
    question: "pidele el número a la persona que te guste o tengras que tomar ",
  },
  {
    id: "62",
    question: "si tienes calcetines blancos tendras que beber ",
  },
  {
    id: "63",
    question: "elije a las personas que utilicen lentes y reparteles ",
  },
  {
    id: "64",
    question: "si alguna vez has estado en la FRIEND ZONE, tendras que tomar ",
  },
  {
    id: "65",
    question: "al que menos este tomando repartele, ",
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props.navigation.state);

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
      currentIndexDrink: 0,
      isVisibleUE: false,
      isVisibleDIDI: false,
      isVisibleUber: false,
      isVisibleRappi: false,
      numberNameView: 1,
      numberNameView2: 0,
      names: props.navigation.state.params,
    };
  }
  onCloseIcon = () => {
    this.setState({
      isVisibleUE: false,
      isVisibleDIDI: false,
      isVisibleUber: false,
      isVisibleRappi: false,
    });
  };
  componentWillMount() {
    setTimeout(
      function() {
        this.setState({ isVisibleUE: true });
      }.bind(this),
      720000
    );

    setTimeout(
      function() {
        this.setState({ isVisibleDIDI: true });
      }.bind(this),
      480000
    );
    setTimeout(
      function() {
        this.setState({ isVisibleUber: true });
      }.bind(this),
      240000
    );
    setTimeout(
      function() {
        this.setState({ isVisibleRappi: true });
      }.bind(this),
      60000
    );
    this.GenerateRandomNumber(), this.GenerateRandomNumberDrink();
    this.GenerateRandomName2();
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        true;
        this.GenerateRandomNumber(), this.GenerateRandomNumberDrink();
        this.GenerateRandomName2();
      },
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
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
  componentWillUnmount = () => {
    this.setState({
      isVisibleUE: false,
      isVisibleDIDI: false,
      isVisibleUber: false,
      isVisibleRappi: false,
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
    var RandomNumber = Math.floor(Math.random() * (64 - 0)) + 1;
    this.setState({
      currentIndex: RandomNumber,
    });
  };
  GenerateRandomNumberDrink = () => {
    var RandomNumber = Math.floor(Math.random() * (3 - 0)) + 1;
    this.setState({
      currentIndexDrink: RandomNumber,
    });
  };

  GenerateRandomName2 = () => {
    var RandomNumber2 = Math.floor(Math.random() * this.state.names.length);
    var RandomNumber = Math.floor(Math.random() * this.state.names.length);
    if (RandomNumber2 != RandomNumber) {
      this.setState({
        numberNameView: RandomNumber,
        numberNameView2: RandomNumber2,
      });
    } else {
      this.setState({
        numberNameView: this.state.names.length - 2,
        numberNameView2: this.state.names.length - 1,
      });
    }
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
              },
            ]}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#19212E",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  transform: [{ rotate: "90deg" }],
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#ffdc34",
                    fontSize: 30,
                  }}
                >
                  ¡MODO PONTE PEDO!
                </Text>

                <Text
                  style={{
                    color: "#faeee7",
                    paddingTop: 15,
                    fontSize: 27,
                  }}
                >
                  {this.state.names[this.state.numberNameView]} {item.question}
                  {this.state.currentIndexDrink} tragos
                </Text>
                <Text
                  style={{
                    color: "#d4f3ef",
                    paddingTop: 20,
                    fontSize: 14,
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
              alignSelf: "flex-end",
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
              borderColor: "#202040",
            }}
          >
            <Text
              onPress={this.clipborDIDI}
              style={{
                margin: 4,
                color: "#202040",
                fontSize: 25,
                fontStyle: "normal",
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
    justifyContent: "center",
  },
  styOver: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  styIcon: {
    alignSelf: "flex-end",
  },
  styTextPromo: {
    margin: 4,
    color: "white",
    fontSize: 25,
    fontStyle: "normal",
  },
  costos: {
    color: "#FEC20A",
    fontSize: 20,
  },
  styPromo: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: "white",
  },
  styh2: {
    fontSize: 18,
    marginBottom: 3,
    color: "#fffdf9",
  },
  styh3: {
    fontSize: 14,
    marginBottom: 3,
    color: "#fffdf9",
  },
  styh4: {
    fontSize: 9,
    marginBottom: 3,
    color: "#fffdf9",
  },
  styImages: { flexDirection: "row", marginTop: 7 },
  codeRappi: {
    fontSize: 18,
    marginBottom: 3,
    color: "#fffdf9",
  },
  textView: {
    alignItems: "center",
    marginBottom: 6,
  },
});
