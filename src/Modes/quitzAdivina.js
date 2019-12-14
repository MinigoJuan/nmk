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
  ActivityIndicator
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import { Overlay, Icon, Button } from "react-native-elements";
const Users = [
  {
    id: "0",
    name: "no",
    image: "",
    description: ""
  },
  {
    id: "1",
    name: "Isaac Newton",
    image: require("../../assets/adivina/newton.jpg"),
    description:
      "Isaac Newton fue un físico, teólogo, inventor, alquimista y matemático inglés."
  },
  {
    id: "2",
    name: "Cristóbal Colón",
    image: require("../../assets/adivina/cristobal.png"),
    description:
      "Cristóbal Colón fue un famoso navegante, almirante, cartógrafo y virrey, quien descubrio america"
  },
  {
    id: "3",
    name: "Albert Einstein",
    image: require("../../assets/adivina/eintein.png"),
    description:
      "Albert Einstein fue un físico alemán de origen judío, nacionalizado después suizo, austriaco y estadounidense. Se lo considera el científico más importante, conocido y popular del siglo XX.​​"
  },
  {
    id: "4",
    name: "Karl Marx",
    image: require("../../assets/adivina/Karl.jpg"),
    description:
      "Karl Marx fue un filósofo, sociólogo, economista y periodista revolucionario alemán de origen judío,​ quien contribuyó en campos como la sociología, la economía, el derecho, y la historia;"
  },
  {
    id: "5",
    name: "Adolf Hitler",
    image: require("../../assets/adivina/Adolf.png"),
    description:
      "Adolf Hitler​ fue un político, militar, pintor y escritor alemán, de origen austrohúngaro lider de los nazis"
  },
  {
    id: "6",
    name: "Lionel Messi",
    image: require("../../assets/adivina/messi.png"),
    description:
      "Leo Messi, ​ es un futbolista argentino que juega como delantero o centrocampista.​​ Ha desarrollado toda su carrera en el F. C. Barcelona"
  },
  {
    id: "7",
    name: "Cristiano Ronaldo",
    image: require("../../assets/adivina/ronaldo.png"),
    description:
      "Cristiano Ronaldo, es un futbolista portugués que juega como delantero en la Juventus F. C"
  },
  {
    id: "8",
    name: "Will Smith",
    image: require("../../assets/adivina/Will.png"),
    description:
      "Will Smith, es un actor, rapero, productor de cine, productor de televisión y productor discográfico estadounidense. "
  },
  {
    id: "9",
    name: "Justin Bieber",
    image: require("../../assets/adivina/justin.png"),
    description:
      "Justin Drew Bieber es un cantante, compositor, músico y bailarín canadiense"
  },
  {
    id: "10",
    name: "Iron Man",
    image: require("../../assets/adivina/Iron.png"),
    description:
      "Iron Man es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics."
  },
  {
    id: "11",
    name: "Michael Jackson",
    image: require("../../assets/adivina/michael.png"),
    description:
      "Michael Joseph Jackson​ fue un cantante, compositor, productor discográfico, bailarín, actor y filántropo estadounidense.​​​ "
  },
  {
    id: "12",
    name: "Timon(El rey Leon)",
    image: require("../../assets/adivina/Timon.png"),
    description:
      "Timón es uno de los personajes de la franquicia El rey león de Disney. Es un pequeño y divertivo suricato que apareció como un personaje principal en la película El rey león"
  },
  {
    id: "13",
    name: "Hercules ",
    image: require("../../assets/adivina/Hercules.png"),
    description:
      "Hércules era un héroe de la mitología griega. Era hijo de Zeus y Alcmena"
  },
  {
    id: "14",
    name: "Dumbo ",
    image: require("../../assets/adivina/Dumbo.png"),
    description:
      "Elefante protagonista de la pelicula Dumbo, tenia orejas grandes con las cuales podia volar"
  },
  {
    id: "15",
    name: "SR. Cara de papa(Toy Story)",
    image: require("../../assets/adivina/papa.png"),
    description:
      "Mr. Potato es un juguete para niños. Consiste en una figura de plástico que participa en Toy Story"
  },
  {
    id: "16",
    name: "Popeye",
    image: require("../../assets/adivina/popeye.png"),
    description:
      "Popeye el marino es un personaje de tiras cómicas y de cortometrajes de dibujos animado"
  },
  {
    id: "17",
    name: "Pato Donald",
    image: require("../../assets/adivina/pato.png"),
    description:
      "El Pato Donald es un personaje de Disney, caracterizado como un pato blanco antropomórfico de ojos celestes, pico, piernas y pies anaranjados."
  },
  {
    id: "18",
    name: "Mickey Mouse",
    image: require("../../assets/adivina/Mickey.png"),
    description:
      "Mickey Mouse es un personaje ficticio de la serie del mismo nombre, emblema de la compañía Disney."
  },
  {
    id: "19",
    name: "Bugs Bunny",
    image: require("../../assets/adivina/Bugs.png"),
    description:
      "Bugs Bunny ​ es un personaje de dibujos animados con forma de conejo que aparece en las series de los Looney Tunes"
  },
  {
    id: "20",
    name: "Homero Simpson",
    image: require("../../assets/adivina/homero.png"),
    description:
      "Homero Simpson es un personaje ficticio protagonista de la serie de televisión de dibujos animados Los Simpson."
  },
  {
    id: "21",
    name: "Pato lucas",
    image: require("../../assets/adivina/lucas.png"),
    description:
      "Es un personaje ficticio que aparece en diferentes capítulos del programa de animación Looney Tunes, solo o en compañía de Bugs Bunny,"
  },
  {
    id: "22",
    name: "Bart Simpson",
    image: require("../../assets/adivina/Bart.png"),
    description:
      "Bart Simpson​​ es uno de los personajes ficticios protagonistas de la serie de televisión de dibujos animados Los Simpson."
  },
  {
    id: "23",
    name: "Pantera Rosa",
    image: require("../../assets/adivina/Pantera.png"),
    description:
      "Es un personaje que se encarga de ayudar a descubrir secretos junto detective."
  },
  {
    id: "24",
    name: "Calamardo",
    image: require("../../assets/adivina/Calamardo.png"),
    description:
      "Es uno de los personajes de la serie de televisión de dibujos animados Bob Esponja."
  },
  {
    id: "25",
    name: "Patricio Estrella",
    image: require("../../assets/adivina/Patricio.png"),
    description:
      "Patricio Estrella es un personaje de la serie animada Bob Esponja, es una estrella marina rosa"
  },
  {
    id: "26",
    name: "Bob Esponja ",
    image: require("../../assets/adivina/Bob.png"),
    description:
      "que junto a su mejor amigo Patricio tienen muchas aventuras en el Fondo de Bikini, la ciudad en la que viven, en el fondo del mar."
  },
  {
    id: "27",
    name: "Thor",
    image: require("../../assets/adivina/Thor.png"),
    description:
      "Thor es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics."
  },
  {
    id: "28",
    name: "Capitán América",
    image: require("../../assets/adivina/Capitán.png"),
    description:
      "Capitán América cuyo nombre real es Steve Rogers, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics."
  },
  {
    id: "29",
    name: "Spiderman",
    image: require("../../assets/adivina/Spiderman.png"),
    description:
      "Spider-Man es un superhéroe aragnido ficticio creado por los escritores y editores Stan Lee y Steve Ditko."
  },
  {
    id: "20",
    name: "Thanos",
    image: require("../../assets/adivina/Thanos.png"),
    description:
      "Thanos es un supervillano ficticio que aparece en los cómics norteamericanos publicados por Marvel Comics."
  },
  {
    id: "30",
    name: "Capitana Marvel",
    image: require("../../assets/adivina/Capitanl.png"),
    description:
      "Carol Susan Jane Danvers o Capitan Marvel es una superheroína ficticia que aparece en cómics estadounidenses publicados por Marvel Comics."
  },
  {
    id: "31",
    name: "Groot",
    image: require("../../assets/adivina/Groot.png"),
    description:
      "Groot es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. "
  },
  {
    id: "32",
    name: "Visión",
    image: require("../../assets/adivina/Visión.png"),
    description:
      "Visión es un androide y superhéroe ficticio de los cómics Marvel Comics, miembro del supergrupo de los Vengadores."
  },
  {
    id: "33",
    name: "Buzz Lightyear",
    image: require("../../assets/adivina/Buzz.png"),
    description:
      "Buzz Lightyear es un personaje ficticio de la franquicia Toy Story de Pixar. Ejerce el rol de un superhéroe espacial de juguete y el de una figura de acción"
  },
  {
    id: "34",
    name: "Darth Vader",
    image: require("../../assets/adivina/Darth.png"),
    description:
      "Anakin Skywalker, más tarde Darth Vader, es el personaje ficticio central de la famosa saga de Star Wars"
  },
  {
    id: "35",
    name: "Dory",
    image: require("../../assets/adivina/Dory.png"),
    description:
      "Dory es el personaje más divertido de la película, y gracias a su bondad y su ingenuidad, ha llegado a tener una película que protagonizará Buscando a Dory"
  },
  {
    id: "36",
    name: "El Joker",
    image: require("../../assets/adivina/Joker.png"),
    description:
      "Es un personaje del universo de DC Comics que es el archienemigo de Batman"
  },
  {
    id: "37",
    name: "Frankenstein",
    image: require("../../assets/adivina/frnaki.png"),
    description:
      "Frankenstein es un personaje de ficción creado con multiples partes de su cuerpo"
  },
  {
    id: "38",
    name: "Han Solo",
    image: require("../../assets/adivina/solo.png"),
    description:
      "Han Solo es un personaje de ficción y uno de los protagonistas de la saga Star Wars."
  },
  {
    id: "39",
    name: "Hermione",
    image: require("../../assets/adivina/hermoi.png"),
    description:
      "Hermione Jean Granger es un personaje de ficción y una de los tres protagonistas de la serie de Harry Potter."
  },
  {
    id: "40",
    name: "Indiana Jones",
    image: require("../../assets/adivina/indiana.png"),
    description:
      "Es un personaje que se encarga de descubrir artefactos arqueologicos en diferentes aventuras"
  },
  {
    id: "41",
    name: "James Bond",
    image: require("../../assets/adivina/james.png"),
    description:
      "James Bond es un personaje de ficción conocido como agente 007"
  },
  {
    id: "42",
    name: "King Kong",
    image: require("../../assets/adivina/king.png"),
    description:
      "King Kong es el nombre de un gigantesco gorila ficticio que habita en la Isla Calavera."
  },
  {
    id: "43",
    name: "Rocky Balboa",
    image: require("../../assets/adivina/rocky.png"),
    description:
      "Rocky Balboa es un personaje de boxeo creado e interpretado por Sylvester Stallone"
  },
  {
    id: "44",
    name: "Jackie Chan",
    image: require("../../assets/adivina/jackie.png"),
    description:
      "Jackie Chan, es un artista marcial, comediante, cantante, actor, acróbata, doble de acción, coordinador de dobles de acción, director, guionista, productor y actor de voz chino, nacido en Hong Kong."
  },
  {
    id: "45",
    name: "Michael Jordan",
    image: require("../../assets/adivina/jordan.png"),
    description:
      "Michael Jeffrey Jordan es un exjugador de baloncesto estadounidense"
  },
  {
    id: "46",
    name: "Neil Armstrong",
    image: require("../../assets/adivina/Neil.png"),
    description:
      "Neil Armstrong, fue un astronauta estadounidense y el primer ser humano en pisar la Luna. También, fue ingeniero aeroespacial, piloto de guerra, piloto de pruebas y profesor universitario."
  },
  {
    id: "47",
    name: "Yuya",
    image: require("../../assets/adivina/Yuya.png"),
    description:
      "Mariand Castrejón Castañeda, conocida profesionalmente como Yuya, es una empresaria, personalidad influyente de internet y youtuber mexicana.​​​"
  },
  {
    id: "48",
    name: "Luisito Comunica.",
    image: require("../../assets/adivina/luis.jpg"),
    description:
      "uisito Comunica, es un YouTuber mexicano. Su canal es el segundo más suscrito de México y el 50º más suscrito a nivel mundial. "
  },
  {
    id: "49",
    name: "Mario bros",
    image: require("../../assets/adivina/Mario.png"),
    description:
      "Mario es un personaje ficticio de la franquicia de videojuegos homónima diseñado por el japonés Shigeru Miyamoto para la compañía Nintendo."
  },
  {
    id: "50",
    name: "El perro cobarde.",
    image: require("../../assets/adivina/perro.png"),
    description:
      "Coraje es un perro muy tímido que debe proteger a sus amos, Muriel y don Justo, de situaciones paranormales y la presencia de alienígenas mal intencionados."
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
    var RandomNumber = Math.floor(Math.random() * (49 - 0)) + 1;
    this.setState({
      currentIndex: RandomNumber
    });
  };
  GenerateRandomNumberDrink = () => {
    var RandomNumber = Math.floor(Math.random() * (2 - 0)) + 1;
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
              <Text
                style={{
                  color: "#b2fcff",
                  paddingTop: 15,
                  fontSize: 28
                }}
              >
                ADIVINA EL PERSONAJE
              </Text>
              <Text
                style={{
                  color: "#b2fcff",
                  paddingTop: 15,
                  fontSize: 28
                }}
              >
                {item.name}
              </Text>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ width: 300, height: 400 }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Text
                style={{
                  color: "#f9f6f7",
                  paddingTop: 15,
                  fontSize: 18,
                  margin: 5
                }}
              >
                {item.description}
              </Text>

              <Text
                style={{
                  color: "#f5f0e3",
                  paddingTop: 20,
                  fontSize: 14
                }}
              >
                Quien adivine el personaje repartira{" "}
                {this.state.currentIndexDrink} {""}Tragos
              </Text>
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
