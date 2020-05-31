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
    question: "Los que tengan el celular en la mesa tomaran ",
  },
  {
    id: "2",
    question: "Todos los que tengan Novia/o tomaran ",
  },
  {
    id: "3",
    question: "La primera persona que encuentre un objeto Negro reparte ",
  },
  {
    id: "4",
    question: "Los que estan bebiendo Tequila, Vodka, Whiskey o Ron tomaran",
  },
  {
    id: "5",
    question: "Si has falsificado una firma bebe ",
  },
  {
    id: "6",
    question:
      "Obliguen a un amigo a que le mande un mensaje a su ex o el tomara",
  },
  {
    id: "7",
    question: "Todos tomense una selfie o tomen ",
  },
  {
    id: "8",
    question: "Elegir a la persona más inteligente y tendra que beber ",
  },
  {
    id: "9",
    question:
      "Cada uno adpta el nombre de la persona a su derecha, el que se equivoque bebe ",
  },
  {
    id: "10",
    question: "Todos los que hayan perdido un telefono móvil, beban ",
  },
  {
    id: "11",
    question: "Canciones de MANA, los que repitan las canciones, beban ",
  },
  {
    id: "12",
    question:
      "Caricachupas presenta nombres de Marcas de cerveza, si se equivocan beban",
  },
  {
    id: "13",
    question: "Todos los que tengan telefono Android, beban",
  },
  {
    id: "14",
    question: "Los que tengan tenis tendran que beber",
  },
  {
    id: "15",
    question: "Todos los hijos unicos beban ",
  },
  { id: "16", question: "Juega 'yo nunca nunca', el que este en minoria beba" },
  {
    id: "17",
    question: "Si mañana tienes que ir a la escuela bebe ",
  },
  {
    id: "18",
    question: "Los que estaban borrachos ayer, beban ",
  },
  {
    id: "19",
    question: "Los que hoy tengan una prenda o accesorio negro beban",
  },
  {
    id: "20",
    question:
      "¿Que prefieres, clima frio o caliente?, los que esten en mayoria tendra que beber ",
  },
  {
    id: "21",
    question: "Si nunca has visto una pelicula de Marvel, Bebe ",
  },
  {
    id: "22",
    question:
      "Todo el mundo elije entre Tacos o Pizza, quienes esten en minoria tomaran",
  },
  {
    id: "23",
    question: "Los que sean fan de los Vengadores que se beban ",
  },
  {
    id: "24",
    question: "Si alguna vez has tenido sexo con alguien mayor de edad bebe ",
  },
  {
    id: "25",
    question: "Los que esten tomando cerveza, beban ",
  },
  {
    id: "26",
    question: "Los jugadores con las copas menos llenas beban",
  },
  {
    id: "27",
    question: "Caricachupas presenta nombres de Marcas de Cigarros ",
  },
  {
    id: "28",
    question:
      "Reta a quién quieras a una guerra de pulgares, el que pierda tendra que beber",
  },
  {
    id: "29",
    question:
      "Elije una palabra, la primera persona que cante el principio de una canción que contenga la canción, reparte ",
  },
  {
    id: "30",
    question: "El que tenga menos cabello bebe ",
  },
  {
    id: "31",
    question: "Elegir a los mas carismaticos y repartir 2 tragos",
  },

  {
    id: "32",
    question: "Si la persona que te gusta esta en este momento, bebe",
  },
  {
    id: "33",
    question: "Todos los que hayan llegado tarde beban",
  },
  {
    id: "34",
    question: "Los que hoy no se hayan bañado beban ",
  },
  {
    id: "35",
    question: "Los que lleguen a tocarse la naris con la lengua reparten",
  },
  {
    id: "36",
    question: "Los que estan fumando ahora mismo beban 2",
  },
  {
    id: "37",
    question: "El jugador mas alto reparte ",
  },
  {
    id: "38",
    question: "TIENES EL HUANTELETE DEL INFINITO!, Reparte ",
  },
  {
    id: "39",
    question: "La persona que encuetre al jugador mas joven reparte ",
  },

  {
    id: "40",
    question: "Elegir a la persona más desafortunada para el amor y darle ",
  },
  {
    id: "41",
    question:
      "Trata de decir los números del uno al diez en cualquier otro idioma o decir el abecedario al revés, si no puedes bebes ",
  },
  {
    id: "42",
    question:
      "Nombres de canciones que comiencen con la letra G, quien se equivoque bebe",
  },
  {
    id: "43",
    question: "Yo nunca nunca he",
  },
  {
    id: "44",
    question:
      "FONDO para el ultimo que haya llegado el dia de hoy y este mismo reparte",
  },
  {
    id: "45",
    question: "TODOS LOS HOMBRES BEBEN",
  },
  {
    id: "46",
    question:
      "Caricachupas presenta nombres de Marcas de Cigarros quien se equivoque bebe",
  },
  {
    id: "47",
    question: "La persona más guapa reparte",
  },
  {
    id: "48",
    question: "La primera persona que saque un condón reparte ",
  },
  {
    id: "49",
    question: "Elegir al jugador más tonto y repartir ",
  },
  {
    id: "50",
    question: "La persona más lista puede repartir",
  },
  {
    id: "51",
    question:
      "¿Qué prefieres, Pepsi o Coca-Cola? los que esten en minoria beberan",
  },
  {
    id: "52",
    question:
      "¿Qué prefieres, Hot-dog o Hamburguesa? los que esten en minoria beberan",
  },
  {
    id: "53",
    question: "Toman todos los que tengan un Iphone beberan ",
  },
  {
    id: "54",
    question: "Si la ultima pelicula que hayas visto ha sido romantica bebe ",
  },
  {
    id: "55",
    question:
      "Caricachupas presenta nombres de Nombres de canciones de Juleta Venegas quien se equivoque o repita, bebe",
  },
  {
    id: "56",
    question: "Confiesa algo que te haya pasado en la cama, sino bebe",
  },
  {
    id: "57",
    question: "La persona que tenga el mejor cuerpo, y tendra que beber ",
  },
  {
    id: "58",
    question: "Los que esten bebiendo tequila tomaran ",
  },
  {
    id: "59",
    question:
      "Elije a la persona que duerma más que todos, esta tendra que beber",
  },
  {
    id: "60",
    question:
      "Nombra cosas que se llevan de vacaciones, el que se repita que beba ",
  },
  {
    id: "61",
    question: "Caricachupas presenta nombres de Redes sociales ",
  },
  {
    id: "62",
    question: "Bebe un trago si estas soltero, Si tienes pareja bebe ",
  },
  {
    id: "63",
    question: "Las personas que sean diestras beben ",
    answers: "",
  },
  {
    id: "64",
    question: "Propon una Palabra Prohibida quien la diga, beberan ",
  },
  {
    id: "65",
    question: "Al que menos este tomando repartan le ",
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
      currentIndexDrink: 0,
      isVisibleUE: false,
      isVisibleDIDI: false,
      isVisibleUber: false,
      isVisibleRappi: false,
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
    console.log("unready");

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
                  ¡MODO AMIGOS!
                </Text>

                <Text
                  style={{
                    color: "#fffdf9",
                    paddingTop: 15,
                    fontSize: 27,
                  }}
                >
                  {item.question} {this.state.currentIndexDrink} tragos
                </Text>
                <Text
                  style={{
                    color: "#f5f0e3",
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
