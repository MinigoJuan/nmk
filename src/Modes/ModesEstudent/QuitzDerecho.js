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
    question: "¿Qué es el derecho?",
    answers:
      "Es un sistema de normas que organizan el Estado y las Instituciones sociales que rigen la convivencia humana, con el objeto de imponer el orden, la paz, la justicia, la seguridad y el bien común  "
  },
  {
    id: "1",
    question: "¿Qué es el Derecho Positivo?",
    answers:
      "Sistema de normas jurídicas y decisiones impuestas y tuteladas por el poder social que regula la vida de un pueblo determinado en una época determinada. "
  },
  {
    id: "2",
    question: "¿Cuáles son las fuentes del Derecho Positivo? ",
    answers: "Son las fuentes materiales y formales."
  },
  {
    id: "3",
    question: "¿Qué son las fuentes materiales? ",
    answers:
      "Son las causas o fuerzas creadoras del Derecho, es lo que motiva a la creación de la norma."
  },
  {
    id: "4",
    question: "¿Cómo se dividen las fuentes materiales?",
    answers: "En directas e indirectas."
  },
  {
    id: "5",
    question: "¿Qué son las fuentes formales? ",
    answers:
      "Son las formas o el modo como se manifiesta el Derecho. Son las formas de expresión del Derecho, como: La Costumbre, La ley, jusiprudencia etc. ",
    color: "#293462"
  },
  {
    id: "6",
    question: "¿Qué es la costumbre?",
    answers:
      "Es la reiteración de un mismo acto acompañado de la convicción de responder a una necesidad jurídica, la costumbre satisface a una necesidad jurídica, sino sería sólo una moda. ",
    color: "#293462"
  },
  {
    id: "7",
    question: "¿De donde proviene el derecho?",
    answers:
      "proviene del vocablo latino DIRECTUM que significa en su primer origen, lo que es bien dirigido o lo que no se aparta del buen camino.",
    color: "#293462"
  },
  {
    id: "8",
    question: "Mes y día de la creación de la constitución de 1917  ",
    answers: "5 de febrero.",
    color: "#293462"
  },
  {
    id: "9",
    question: "Menciona los 3 tipos de derecho.",
    answers: "Social, publico y privado ",
    color: "#293462"
  },
  {
    id: "10",
    question: "Es la parte fundamental de la sociedad ",
    answers: "Nación ",
    color: "#293462"
  },
  {
    id: "11",
    question: "Artículos mas destacados de la constitución de 1917",
    answers: "3,27,123",
    color: "#293462"
  },
  {
    id: "12",
    question: "El derecho pertenece a las ciencias:",
    answers: "Sociales",
    color: "#293462"
  },
  {
    id: "13",
    question: "Es el derecho encargado de las relaciones entre países ",
    answers: "Derecho internacional.",
    color: "#293462"
  },
  {
    id: "14",
    question: "¿Que es derecho objetivo y que es derecho subjetivo?",
    answers:
      "Derecho Objetivo: Conjunto de reglas y normas que regulan la sociedad. Derecho Subjetivo: Son Facultades inherentes al hombre! es decir el poder que tiene cadaindividuo para ejercer en la sociedad",
    color: "#293462"
  },
  {
    id: "15",
    question: "¿Que es derecho vigente y que es derecho positivo?",
    answers:
      "Son las normas obligatorias que rigen en cada estado determinadaspor la autoridad poltica.",
    color: "#293462"
  },
  {
    id: "16",
    question: "Que es la doctrina",
    answers:
      "Es la interpretación de la ley, estudios y opiniones, que los autores de derecho emiten en sus obras",
    color: "#293462"
  },
  {
    id: "17",
    question: "Nombre las etapas del proceso legislativo: ",
    answers:
      "Iniciativa, Discusión, Aprobación, Sanción, Publicación e Iniciación de la vigencia. ",
    color: "#293462"
  },
  {
    id: "18",
    question: "¿Que es el Hecho jurídico?",
    answers:
      "Son hechos o acontecimientos los cuales se ligan entre si y caen dentro de los efectos jurídicos.",
    color: "#293462"
  },
  {
    id: "19",
    question: "¿Que es el acto jurídico ?",
    answers:
      "Acto humano que tiene como fin establecer relaciones jurídicas entre las personas. Crear, Modificar o extinguir derechos.",
    color: "#293462"
  },
  {
    id: "20",
    question:
      "¿Cuáles son los elementos de existencia del acto jurídico, explíquelos brevemente ?",
    answers: "Voluntad, Objeto y Solemnidad.",
    color: "#293462"
  },
  {
    id: "21",
    question: "¿Cuáles son los requisitos de validez del acto jurídico ?",
    answers:
      "Ausencia de vicios de la voluntad, capacidad de las partes y Formalidades.",
    color: "#293462"
  },
  {
    id: "22",
    question: "¿Que es la norma jurídica?",
    answers: "Mandatos que se aplican a las relaciones del hombre. ",
    color: "#293462"
  },
  {
    id: "23",
    question: "¿Cuáles son los elementos del Estado?",
    answers: "Territorio, Población y Poder",
    color: "#293462"
  },
  {
    id: "24",
    question: "¿Que es la soberanía?",
    answers: "Atributo esencial del poder político.",
    color: "#293462"
  },
  {
    id: "25",
    question: " ¿Que es el derecho público?",
    answers:
      "Normas jurídicas que regulan las relaciones de estado como ente soberano con los ciudadanos con otros estados.",
    color: "#293462"
  },
  {
    id: "26",
    question: "Que entiendes por derecho a la libertad",
    answers:
      "Hacer lo que se debe, como ejecutar u admitir lo que, estando permitido, no se encuentra jurídicamente prescrito",
    color: "#293462"
  },
  {
    id: "27",
    question: "¿Que entiende por derecho de acción?",
    answers:
      "Es un derecho subjetivo que depende directamente de la intervención del órgano jurisdiccional  competente para la protección de un bien jurídico tutelado",
    color: "#293462"
  },
  {
    id: "28",
    question: "Que es el derecho de petición y su fundamento constitucional",
    answers:
      "Se debe ejercer mediante un escrito de manera pacífica y respetuosa, Art: 8 de la C.P.E.U.M.",
    color: "#293462"
  },
  {
    id: "29",
    question: "¿Que son los derechos políticos?",
    answers:
      "Consiste en la facultad de intervenir en la vida pública como órgano del estado.",
    color: "#293462"
  },
  {
    id: "30",
    question: "Diferencia entre persona física y persona jurídica",
    answers:
      "Persona Física: Individuo sujeto a derecho. Persona jurídica: Cualquiera sujeto a derecho",
    color: "#293462"
  },
  {
    id: "31",
    question: "Atributos de la persona física  ",
    answers:
      "Todo miembro de la especie humana susceptible de adquirir derechos y contraer obligaciones ",
    color: "#293462"
  },
  {
    id: "32",
    question: "Atributos de la persona jurídica colectiva",
    answers:
      "Asociación más o menos numerosa de individuos, que tienden a la constitución de un fin.",
    color: "#293462"
  },
  {
    id: "33",
    question: "¿Cuantos articulos tiene la Constitucion ?",
    answers: "136 Articulos",
    color: "#293462"
  },
  {
    id: "34",
    question: "¿Que son las personas “morales”?",
    answers:
      "Agrupación de personas las cuales se rigen bajo una razón social.",
    color: "#293462"
  },
  {
    id: "35",
    question: "¿Que es la Ley?",
    answers: "Es la norma jurídica dictada por el poder público",
    color: "#293462"
  },
  {
    id: "36",
    question: "¿Que es la interpretación de la ley?",
    answers: "Desentrañar en sentido de una expresión",
    color: "#293462"
  },
  {
    id: "37",
    question: "Primero en tiempo primero en: ",
    answers: "Derecho",
    color: "#293462"
  },
  {
    id: "38",
    question: "Titulo 1 de la Constitución Politica de México",
    answers: "Derechos humanos  sus garantias ",
    color: "#293462"
  },
  {
    id: "39",
    question: "¿Qué es un contrato?",
    answers:
      "Es un convenio en cuya virtud, una o varias personas se obligan respecto de una o de varias otras, a dar, hacer, o no hacer alguna cosa.",
    color: "#293462"
  },

  {
    id: "40",
    question:
      "¿En que articulo se funda en la constitución el derecho al trabajo?",
    answers: "Art: 123",
    color: "#293462"
  },
  {
    id: "41",
    question: "¿Cuáles son las características de la norma jurídica?",
    answers: "Exterioridad ,Bilateral, Heterónomo y Coercibilidad ",
    color: "#293462"
  },
  {
    id: "42",
    question: "¿Cuáles son las fuentes del derecho?",
    answers: "Formales, Históricas y Reales",
    color: "#293462"
  },
  {
    id: "43",
    question: "¿Qué es el reglamento?",
    answers:
      "Conjunto de normas obligatorias que emite el ejecutivo para regular la administración pública",
    color: "#293462"
  },
  {
    id: "44",
    question: "¿Cuál es la diferencia entre reglamento y decreto?",
    answers:
      "El decreto es firmado por el ejecutivo y el secretario del ramo (refrendo)",
    color: "#293462"
  },
  {
    id: "45",
    question: "¿Qué es la analogía?",
    answers:
      "Preceptos de índole semejante en relación a normas jurídicas aplicables a litigios",
    color: "#293462"
  },
  {
    id: "46",
    question: "¿Qué es la jurisprudencia?",
    answers:
      "Ciencia del derecho. Normas jurídicas creada por el poder judicial para rellenar lagunas de la ley. Opinión o interpretación de los juristas.",
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
    question: "¿Qué son las leyes ordinarias?",
    answers:
      "Integran y precisan principios y declaraciones generales de la constitución",
    color: "#293462"
  },
  {
    id: "49",
    question: "¿Qué es un decreto?",
    answers: "Normas que buscan promover la exacta observancia de la ley.",
    color: "#293462"
  },
  {
    id: "50",
    question: "¿Qué son los principios generales del derecho?",
    answers: "Valores universales en materia jurídica que son irrefutables",
    color: "#293462"
  },
  {
    id: "51",
    question: "¿Qué es la equidad?",
    answers: "Aplicar la justicia a cada caso concreto",
    color: "#293462"
  },
  {
    id: "52",
    question: "¿Qué es el conflicto de normas?",
    answers:
      "Cuando 2 normas se contradicen y la más importante elimina a la menos importante",
    color: "#293462"
  },
  {
    id: "53",
    question:
      "¿Cómo esta focalizado el orden jerárquico del derecho en México?",
    answers: "Federal (conjunto de estados) y local (un estado)",
    color: "#293462"
  },
  {
    id: "54",
    question: "¿Qué es la constitución o ley suprema?",
    answers:
      "Normas generales, abstractas y obligatorias de la conducta humana ",
    color: "#293462"
  },
  {
    id: "55",
    question: "¿Cuáles son las principales garantías individuales?",
    answers: "Respeto a la vida, libertad, igualdad y seguridad",
    color: "#293462"
  },
  {
    id: "56",
    question: "¿En qué consiste la parte orgánica de la constitución?",
    answers:
      "Estructura del estado en 2 sentidos: Composición de los poderes del estado y funcionamiento",
    color: "#293462"
  },
  {
    id: "57",
    question: "¿En qué consiste la parte social de la constitución?",
    answers:
      "Disposiciones que tienden a la dignificación y salvaguarda de los grupos homogéneos económicamente desvalidos",
    color: "#293462"
  },
  {
    id: "58",
    question: "¿Cuáles son las 3 partes de la constitución?",
    answers: "Dogmática, objetiva y orgánica",
    color: "#293462"
  },
  {
    id: "59",
    question: "¿En qué consiste la parte dogmática de la constitución?",
    answers: "Un reconocimiento a los derechos humanos ",
    color: "#293462"
  },
  {
    id: "60",
    question: "¿Qué son las garantías sociales?",
    answers: "Garantías que tutelan al hombre en su orden social",
    color: "#293462"
  },
  {
    id: "61",
    question: "¿Quién resuelve los conflictos derivados de las votaciones?",
    answers: "El Tribunal Federal Electoral ",
    color: "#293462"
  },
  {
    id: "62",
    question: "¿Cuáles son las garantías sociales?",
    answers: "Educación, habitación, cultura y propiedad privada",
    color: "#293462"
  },
  {
    id: "63",
    question: "¿Cuál es el fin de la democracia?",
    answers: "La defensa, el bienestar y el desarrollo del hombre",
    color: "#293462"
  },
  {
    id: "64",
    question: "¿Por qué es México una federación?",
    answers:
      "Porque es la coexistencia entre los poderes de entidades federativas con un poder federal. ",
    color: "#293462"
  },
  {
    id: "65",
    question: "¿Qué es el derecho penal?",
    answers: "Rama del derecho que regula y estudia el delito ",
    color: "#293462"
  },
  {
    id: "66",
    question: "¿Qué es el delito?",
    answers: "Conducta típica (prohibida), antijurídica, culpable y punible",
    color: "#293462"
  },
  {
    id: "67",
    question: "¿Cuáles son los 2 tipos de conducta culpable?",
    answers: "Por dolo (consciente) y por culpa",
    color: "#293462"
  },
  {
    id: "68",
    question: "¿Cuáles son los delitos sexuales?",
    answers: "Hostigamiento sexual, Abuso sexual, Incesto y Estupros",
    color: "#293462"
  },
  {
    id: "69",
    question: "¿Cuál es la función del ministerio público?",
    answers: "Investiga y persigue delitos",
    color: "#293462"
  },
  {
    id: "70",
    question: "¿Qué es la centralización?",
    answers: "Secretarías dependen directamente del presidente.",
    color: "#293462"
  },
  {
    id: "71",
    question:
      "¿Cuáles son los delitos contra la vida y la integridad corporal?",
    answers: "Homicidio y lesiones ",
    color: "#293462"
  },
  {
    id: "72",
    question: "¿Qué es la concesión?",
    answers: "Estado permite a particulares gestión de servicios públicos",
    color: "#293462"
  },
  {
    id: "73",
    question: "¿Qué son las secretarías de estado?",
    answers: "Son organos que auxilian al presidente en su acción de gobernar",
    color: "#293462"
  },
  {
    id: "74",
    question: "¿Para qué sirve la ONU?",
    answers:
      "Preserva la paz mundial, la justicia social y promueve el progreso",
    color: "#293462"
  },
  {
    id: "75",
    question: "¿Quiénes son los sujetos procesales?",
    answers: "Juez, Partes (Actor y Demandado) y Tercero ajeno",
    color: "#293462"
  },
  {
    id: "76",
    question: "¿Qué es el amparo?",
    answers:
      "Juicio o recurso que es utilizado cuando se viola una garantía por el estado.",
    color: "#293462"
  },
  {
    id: "77",
    question: "¿Cuáles son los tipos de amparo?",
    answers: "Directo e Indirecto",
    color: "#293462"
  },
  {
    id: "78",
    question: "¿Qué es un proceso penal?",
    answers:
      "Secuencia de actos que culminan con la sentencia para resolver un conflicto.",
    color: "#293462"
  },
  {
    id: "79",
    question: "¿Para qué sirve el derecho procesal?",
    answers: "Conoce la controversia e imparte justicia.",
    color: "#293462"
  },
  {
    id: "80",
    question: "¿Qué es el Congreso de la Unión?",
    answers: "La cámara de diputados y la de senadores.",
    color: "#293462"
  },
  {
    id: "81",
    question:
      "¿Cuándo tiene el presidente la facultad de legislar sin que intervenga el Congreso de la Unión?",
    answers: "En materia de importaciones o exportaciones.",
    color: "#293462"
  },
  {
    id: "82",
    question: "¿Qué es la descentralización?",
    answers:
      "Actividades de la administración a entes públicos con autonomía y funciones",
    color: "#293462"
  },
  {
    id: "83",
    question: "¿Cuáles son los delitos contra el patrimonio?",
    answers: "Fraude, Robo y Despojo",
    color: "#293462"
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
      240000
    );
    setTimeout(
      function() {
        this.setState({ isVisibleUber: true });
      }.bind(this),
      720000
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
    var RandomNumber = Math.floor(Math.random() * (82 - 0)) + 1;
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
