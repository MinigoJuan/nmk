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
    Verdad: "Verdad",
    question: "¿Has tenido sueños eróticos con algun@ de los precentes?",
    reto: "Reto",
    question2: "Recrea una escena de una pelicula tonta con tu mejor amig@."
  },
  {
    id: "1",
    Verdad: "Verdad",
    question:
      "¿Te gusta una amiga de la escuela? ¿Quién es y por qué te gusta ?",
    reto: "Reto",
    question2:
      "Publica en una red social: 'Amo a [nombre de la persona que más odias]'"
  },
  {
    id: "2",
    Verdad: "Verdad",
    question: "¿Alguna vez te tomaste fotos desnud@?",
    reto: "Reto",
    question2: "Baila sensualmente a tu mejor amig@."
  },
  {
    id: "3",
    Verdad: "Verdad",
    question: "¿A quién besarías de los jugadores presentes?",
    reto: "Reto",
    question2:
      "Siéntate en las piernas del jugador de la derecha y dale un beso muy sensual por 1 minuto."
  },
  {
    id: "4",
    Verdad: "Verdad",
    question: "¿Te gusta alguien?",
    reto: "Reto",
    question2: "Mándale una foto besando a alguien."
  },
  {
    id: "5",
    Verdad: "Verdad",
    question: "¿Cuál fue tu momento más cachondo de tu vida? ¿Por qué?",
    reto: "Reto",
    question2: "Lame la espalda del jugador que está a tu lado derecho."
  },
  {
    id: "6",
    Verdad: "Verdad",
    question: "¿Qué tipo de ropa interior usas?",
    reto: "Reto",
    question2: "Tómate una foto sexy y mándasela a tu papá."
  },
  {
    id: "7",
    Verdad: "Verdad",
    question: "¿Dónde diste tu primer beso?",
    reto: "Reto",
    question2:
      "Enviarle un texto a tu novio y termina la relación con una falsa excusa"
  },
  {
    id: "8",
    Verdad: "Verdad",
    question: "¿Cuál fue la travesura más grande que hiciste?",
    reto: "Reto",
    question2:
      "Dale un me gusta a la foto de Instagram de la persona que te gusta."
  },
  {
    id: "9",
    Verdad: "Verdad",
    question: "Si ves a tu ex en una fiesta y te pide un beso, ¿se lo darías?",
    reto: "Reto",
    question2: "Recibe una cachetada de cada lado de uno de los jugadores."
  },
  {
    id: "10",
    Verdad: "Verdad",
    question:
      "¿Cuál es la foto más atrevida que tienes en el celular? Muéstrasela a los presentes",
    reto: "Reto",
    question2:
      "Mójate el cabello y canta y baila frente a todos 'Loca' de Shakira."
  },
  {
    id: "11",
    Verdad: "Verdad",
    question: "¿Alguna vez le mentiste bien feo a alguno de los presentes?",
    reto: "Reto",
    question2: "Bebe algún aderezo (a elección del de la izquierda)"
  },
  {
    id: "12",
    Verdad: "Verdad",
    question: "¿Quién te rompió el corazón?",
    reto: "Reto",
    question2: "Tomate una foto haciendo muecas."
  },
  {
    id: "13",
    Verdad: "Verdad",
    question:
      "¿Alguna vez le miraste el paquete a alguno de los presentes? ¿A quién?",
    reto: "Reto",
    question2: "Haz 20 abdominales seguidos!"
  },
  {
    id: "14",
    Verdad: "Verdad",
    question: "¿Alguna vez te escapaste de tu casa?",
    reto: "Reto",
    question2: "Haz una reversazo"
  },
  {
    id: "15",
    Verdad: "Verdad",
    question: "¿Tuviste algo con un prim@?",
    reto: "Reto",
    question2: "Sal a la calle y grita por tres cuadras '¡Hago mamadas gratis!'"
  },
  {
    id: "16",
    Verdad: "Verdad",
    question: "¿Cuál fue la mentira más grande que dijiste?",
    reto: "Reto",
    question2: "Ve a la calle y abraza a un poste"
  },
  {
    id: "17",
    Verdad: "Verdad",
    question: "¿Alguna vez te la mediste?",
    reto: "Reto",
    question2: "Publica en las redes que te mide 5 cm"
  },
  {
    id: "18",
    Verdad: "Verdad",
    question: "¿Cómo terminó tu última relación?",
    reto: "Reto",
    question2: "Llama a tu ex y decirle que lo/a extrañas."
  },
  {
    id: "19",
    Verdad: "Verdad",
    question: "¿Hace cuánto no te depilas?",
    reto: "Reto",
    question2:
      "El de tu izquierda te tiene que depilar el brazo con lo que tenga."
  },
  {
    id: "20",
    Verdad: "Verdad",
    question: "¿Hace cuánto no tienes pareja?",
    reto: "Reto",
    question2:
      "Publica en las redes: 'Hago masajes a domicilio' y tu número celular."
  },
  {
    id: "21",
    Verdad: "Verdad",
    question: "¿Le eres fiel a tu novio?",
    reto: "Reto",
    question2: "Dale un beso a la persona de la izquierda!"
  },
  {
    id: "22",
    Verdad: "Verdad",
    question: "¿Con quién te hubiera gustado tener tu primera vez?",
    reto: "Reto",
    question2: "Cuanta tu primera vez."
  },
  {
    id: "23",
    Verdad: "Verdad",
    question: "¿Cuántas veces por mes tienes sexo?",
    reto: "Reto",
    question2:
      "Publica en las redes que eres un 'pinche huevón con el rabo pequeñito'."
  },
  {
    id: "24",
    Verdad: "Verdad",
    question: "¿Quién fue tu primer amor?",
    reto: "Reto",
    question2:
      "Tómate una foto en la que salgas muy fe@ y envíasela a la persona que te gusta."
  },
  {
    id: "25",
    Verdad: "Verdad",
    question: "Si pudieras ir al pasado, ¿qué cambiarías?",
    reto: "Reto",
    question2: "Róbale un beso al jugador que le gusta a tu amiga."
  },
  {
    id: "26",
    Verdad: "Verdad",
    question: "¿Aún ves películas para niños?",
    reto: "Reto",
    question2:
      "Dile a la persona más alta del grupo lo más vergonzoso que te ha pasado"
  },
  {
    id: "27",
    Verdad: "Verdad",
    question: "¿Eres griton@ / gimes cuando estás en la cama?",
    reto: "Reto",
    question2: "Dale un beso en el ombligo a uno de los jugadores."
  },
  {
    id: "28",
    Verdad: "Verdad",
    question: "¿Te parece bonit@ algún profesor/a?",
    reto: "Reto",
    question2: "Publica en tus redes sociales que estás caliente."
  },
  {
    id: "29",
    Verdad: "Verdad",
    question: "¿Fumaste alguna droga alguna vez?",
    reto: "Reto",
    question2: "Llama a tu mama por teléfono y dile que estas perdido"
  },
  {
    id: "30",
    Verdad: "Verdad",
    question: "¿Te gusta llamar la atención de alguno de los presentes?",
    reto: "Reto",
    question2:
      "Sostén un hielo con tus labios y pásaselo por la espalda al jugador que te guste."
  },
  {
    id: "31",
    Verdad: "Verdad",
    question: "¿Alguna vez te hiciste pipi encima?",
    reto: "Reto",
    question2: "Muerde el labio de uno de los jugadores (suavecito)"
  },
  {
    id: "32",
    Verdad: "Verdad",
    question: "¿Desearías tener sexo todos los días?",
    reto: "Reto",
    question2: "Lame los pies de otro jugador"
  },
  {
    id: "33",
    Verdad: "Verdad",
    question: "¿Te gustaría tener sexo con tu prim@?",
    reto: "Reto",
    question2: "Quítate toda la ropa y quédate en calzoncillos."
  },
  {
    id: "34",
    Verdad: "Verdad",
    question:
      "¿Alguna vez estuviste borrach@ y te acostaste con alguien que no conocías?",
    reto: "Reto",
    question2: "Todos los jugadores tienen que tocarte la cola."
  },
  {
    id: "35",
    Verdad: "Verdad",
    question: "¿Qué es lo más atrevido que haz hecho?",
    reto: "Reto",
    question2: "Besa una parte del cuerpo de otro jugador."
  },
  {
    id: "36",
    Verdad: "Verdad",
    question: "¿Te gusta el ex de alguna amig@?",
    reto: "Reto",
    question2: "Dale un abrazo a la jugadora más fea."
  },
  {
    id: "37",
    Verdad: "Verdad",
    question: "¿Alguna vez tuviste un embarazo psicológico?",
    reto: "Reto",
    question2:
      "Llama por teléfono a la casa de un extraño y di: 'Mi amor, estoy embarazada'."
  },
  {
    id: "38",
    Verdad: "Verdad",
    question: "¿Alguna vez tuviste un sueño humedo?",
    reto: "Reto",
    question2: "Mira un video porno en frente de todos los jugadores."
  },
  {
    id: "39",
    Verdad: "Verdad",
    question: "¿Dejarías morir a tu mejor amig@ por $100.000.000?",
    reto: "Reto",
    question2: "Baila alrededor de los jugadores sin pantalones."
  },
  {
    id: "40",
    Verdad: "Verdad",
    question: "¿Cuál fue tu peor experiencia con el otro sexo?",
    reto: "Reto",
    question2: "Díle un priopo al primer extraño que pase por la calle."
  },
  {
    id: "41",
    Verdad: "Verdad",
    question: "Di el nombre de la persona que te gusta.",
    reto: "Reto",
    question2: "Chúpale la oreja al jugador que está a tu izquierda."
  },
  {
    id: "42",
    Verdad: "Verdad",
    question: "¿Quién fue la última persona a la que besaste?",
    reto: "Reto",
    question2: "Canta a todo pulmón la canción más tonta que hayas escuchado."
  },
  {
    id: "43",
    Verdad: "Verdad",
    question:
      "Si tuvieras que cambiar mentes con alguno de los participantes...¿con quién sería y por qué?",
    reto: "Reto",
    question2: "Dale un beso sensual al jugador que esté a tu izquierda."
  },
  {
    id: "44",
    Verdad: "Verdad",
    question: "¿Has tenido sexo hace poco? ¿Hace cuántos días?",
    reto: "Reto",
    question2: "Revela el nombre de la ultima persona con la que tuviste sexo."
  },
  {
    id: "45",
    Verdad: "Verdad",
    question: "¿Qué tipo de ropa interior usas?",
    reto: "Reto",
    question2: "Tómate una foto sexy y mándasela a tu mejor amigo."
  },
  {
    id: "46",
    Verdad: "Verdad",
    question: "¿Algún día faltaste a clases sin permiso?",
    reto: "Reto",
    question2: "Pregúntale a la más fea del salón si quiere ser tú novia."
  },
  {
    id: "47",
    Verdad: "Verdad",
    question: "¿Alguna vez te hiciste pipi en público?",
    reto: "Reto",
    question2:
      "Fílmate haciendo un baile sensual y mándaselo al chico que te gusta"
  },
  {
    id: "48",
    Verdad: "Verdad",
    question: "¿Matarías por amor?",
    reto: "Reto",
    question2: "Revela un secreto"
  },
  {
    id: "49",
    Verdad: "Verdad",
    question: "¿Te gusta los programas de chismes?",
    reto: "Reto",
    question2: "Cuéntale a los jugadores un secreto de tu mejor amig@."
  },
  {
    id: "50",
    Verdad: "Verdad",
    question: "¿Tragas o escupes?",
    reto: "Reto",
    question2: "Baila fogosamente con el jugador que más te guste."
  },
  {
    id: "51",
    Verdad: "Verdad",
    question: "¿Eres virgen?",
    reto: "Reto",
    question2: "Dile a tu mejor amiga que sales con su novio."
  },
  {
    id: "52",
    Verdad: "Verdad",
    question:
      "¿Alguna vez te acostaste con alguien que no conocías durante una noche de locura?",
    reto: "Reto",
    question2: "¡Manda una foto desnud@ a una persona por mensaje!"
  },
  {
    id: "53",
    Verdad: "Verdad",
    question: "¿Alguna vez tuviste ganas de besar a uno de los jugadores?",
    reto: "Reto",
    question2: "Recrea una escena porno con ropa con la ayuda de otro jugador."
  },
  {
    id: "54",
    Verdad: "Verdad",
    question: "¿Alguna vez tuviste celos del ex de tu novi@?",
    reto: "Reto",
    question2: "Dile a tu mejor amiga que no la puedes ver más."
  },
  {
    id: "55",
    Verdad: "Verdad",
    question: "¿Qué fue lo más humillante que te pasó teniendo sexo?",
    reto: "Reto",
    question2: "Llama a tu mamá y explícale qué es el ."
  },
  {
    id: "56",
    Verdad: "Verdad",
    question: "¿Alguna vez besaste a alguien en la boca?",
    reto: "Reto",
    question2: "Grita en alto 'YO AMO A MI MAMÁ'"
  },
  {
    id: "57",
    Verdad: "Verdad",
    question: "¿Alguna ves te tiraste un pedo enfrente de mucha gente?",
    reto: "Reto",
    question2: "Baila sobre la mesa."
  },
  {
    id: "58",
    Verdad: "Verdad",
    question:
      "¿Haz visto desnud@ a un/una amig@ del mismo sexo? ¿Quién? ¿Por qué?",
    reto: "Reto",
    question2: "Quitate una prenda de tu ropa o accesorios"
  },
  {
    id: "59",
    Verdad: "Verdad",
    question:
      "¿Alguna vez mentiste para ayudar a un amigo? ¿Cuál fue la mentira que dijiste?",
    reto: "Reto",
    question2: "Dale un beso en el ombligo al jugador que está a tu derecha."
  },
  {
    id: "60",
    Verdad: "Verdad",
    question: "¿Quién fue la última persona que te vio desnuda?",
    reto: "Reto",
    question2: "Bésate los dedos del pies."
  },
  {
    id: "61",
    Verdad: "Verdad",
    question: "¿Qué es lo más asqueroso que has hecho?",
    reto: "Reto",
    question2: "Eructa el alfabeto."
  },
  {
    id: "62",
    Verdad: "Verdad",
    question: "¿Tienes novi@ por tener o por amor?",
    reto: "Reto",
    question2:
      "Llama a tu novi@, ponlo en altavoz y pídele que te diga algo que no te guste de ti."
  },
  {
    id: "63",
    Verdad: "Verdad",
    question: "¿Eres virgen?",
    reto: "Reto",
    question2: "Dile a tu novio que le fuiste infiel."
  },
  {
    id: "64",
    Verdad: "Verdad",
    question: "¿Te gusta comerte los mocos?",
    reto: "Reto",
    question2: "Come los mocos de uno de los jugadores."
  },
  {
    id: "65",
    Verdad: "Verdad",
    question:
      "¿Qué es lo más extremo que harías para conseguir una buena calificaión?",
    reto: "Reto",
    question2: "Llama a algún profes@r y dile que lo quieres mucho"
  },
  {
    id: "66",
    Verdad: "Verdad",
    question:
      "Si te obligaran a casarte con uno de los participantes, ¿quién sería y por qué? ",
    reto: "Reto",
    question2:
      "Métete en la boca por 5 segundos la ropa interior más sucia que tenga uno de los participantes."
  },
  {
    id: "67",
    Verdad: "Verdad",
    question: "¿Te acostarías con la hermana/el hermano de tu mejor amig@?",
    reto: "Reto",
    question2: "Dile a tu mamá que va a ser abuela."
  },
  {
    id: "68",
    Verdad: "Verdad",
    question:
      "¿Alguna vez te tiraste un pedo y le echaste la culpa a otra persona?",
    reto: "Reto",
    question2: "Lame la cara de tu mejor amigo 2 veces seguidas."
  },
  {
    id: "69",
    Verdad: "Verdad",
    question: "¿Alguna vez quisiste matar a alguien? ¿Quién? ¿Por qué?",
    reto: "Reto",
    question2: "Bebe 3 shot´s en menos de 5 segundos."
  },
  {
    id: "70",
    Verdad: "Verdad",
    question: "¿Has tenido sueños eróticos con un amig@?",
    reto: "Reto",
    question2: "Prueba una cucharadita de salsa o sal."
  },
  {
    id: "71",
    Verdad: "Verdad",
    question: "¿Alguna vez participaste de un trío?",
    reto: "Reto",
    question2:
      "Publica un nuevo estado que diga que estás celos@ del amor de tu vida y pon sus iniciales."
  },
  {
    id: "72",
    Verdad: "Verdad",
    question: "¿Prefieres que te roben un beso o que te lo pidan?",
    reto: "Reto",
    question2:
      "Llama a tu novi@ y dile que es un dominad@ y muy hombre o mujuer"
  },
  {
    id: "73",
    Verdad: "Verdad",
    question: "¿Has tenido novio y no se lo has dicho a nadie?",
    reto: "Reto",
    question2: "Llama a tu mamá y dile que te quieres casar."
  },
  {
    id: "74",
    Verdad: "Verdad",
    question: "¿Alguna vez besaste a un perro?",
    reto: "Reto",
    question2: "Dale un abrazo super fuerte a tu amig@."
  },
  {
    id: "75",
    Verdad: "Verdad",
    question: "¿Qué te gustaría cambiar de tu pasado?",
    reto: "Reto",
    question2: "Publica en las redes el nombre de la personita que más odias."
  },
  {
    id: "76",
    Verdad: "Verdad",
    question: "¿Quieres acostarte con alguno de los jugadores?",
    reto: "Reto",
    question2: "Róbale un beso al jugador que más te guste."
  },
  {
    id: "77",
    Verdad: "Verdad",
    question: "¿Alguna vez te gustó el papá/la mamá de un amigo?",
    reto: "Reto",
    question2:
      "Si alguno de los jugadores son novios actúa como si fueras su bebé (diles papá y mamá todo el día)"
  },
  {
    id: "78",
    Verdad: "Verdad",
    question: "¿Ya olvidaste a tu ex?",
    reto: "Reto",
    question2: "Dile a tu pareja actual que amas a tu ex."
  },
  {
    id: "79",
    Verdad: "Verdad",
    question: "¿Alguna vez sobornaste a un policía?",
    reto: "Reto",
    question2: "Come un plátano con ketchup."
  },
  {
    id: "80",
    Verdad: "Verdad",
    question: "¿Engañarías a tu novi@ por dinero?",
    reto: "Reto",
    question2: "Tócale el trasero a cada jugador."
  },
  {
    id: "81",
    Verdad: "Verdad",
    question: "¿Alguna vez pretendiste ser otra persona?",
    reto: "Reto",
    question2: "Camina como un pingüino alrededor de la habitación."
  },
  {
    id: "82",
    Verdad: "Verdad",
    question: "¿Con cuántas personas te has acostado?",
    reto: "Reto",
    question2:
      "Date un beso de a 3 junto con la persona que esté a tu derecha y a tu izquierda."
  },
  {
    id: "83",
    Verdad: "Verdad",
    question: "¿Alguna vez te descubrieron viendo porno?",
    reto: "Reto",
    question2: "Dile a un/una amig@ de tu mismo sexo 'Te amo'"
  },
  {
    id: "84",
    Verdad: "Verdad",
    question: "¿Estuviste de novi@ con alguien que conociste en Internet?",
    reto: "Reto",
    question2: "Ve a la calle y corre gritando 'estoy locooooooo'"
  },
  {
    id: "85",
    Verdad: "Verdad",
    question: "¿Alguna ves cortaste con alguien para irte con otra persona?",
    reto: "Reto",
    question2: "Mójate con agua helada."
  },
  {
    id: "86",
    Verdad: "Verdad",
    question: "¿Alguna vez tuviste algo con la novia de un amigo?",
    reto: "Reto",
    question2: "Sácate una foto besando a un perro y envíasela a tus contactos."
  },
  {
    id: "87",
    Verdad: "Verdad",
    question: "¿Alguna vez enviaste 'nudes'?",
    reto: "Reto",
    question2: "Grábate bailando el 'baby shark' y súbelo."
  },
  {
    id: "88",
    Verdad: "Verdad",
    question: "¿Alguna vez seduciste a un chic@ sólo porque estabas aburrid@?",
    reto: "Reto",
    question2: "Envía una foto a un contacto donde se te marquen los pezones."
  },
  {
    id: "89",
    Verdad: "Verdad",
    question: "¿Alguna vez te gustó una persona mayor que tú",
    reto: "Reto",
    question2: "Ve a una farmacia y pregunta si tienen condones extra grandes."
  },
  {
    id: "90",
    Verdad: "Verdad",
    question:
      "¿Crees en la reencarnación? Si es así, ¿quién crees que fuiste en tu otra vida?",
    reto: "Reto",
    question2: "Bésate el dedo gordo del pie."
  },
  {
    id: "91",
    Verdad: "Verdad",
    question:
      "Si pudieras saber qué piensa una persona sobre ti, ¿a quien elegirías?",
    reto: "Reto",
    question2: "Métele el dedo en la nariz de tu amig@"
  },
  {
    id: "92",
    Verdad: "Verdad",
    question:
      "¿Alguna vez engañaste a tu novi@ sólo por que no te prestaba atención?",
    reto: "Reto",
    question2:
      "Baila la macarena mientras te graban y envíaselo a algún contacto de tu cel."
  },
  {
    id: "93",
    Verdad: "Verdad",
    question:
      "Si tu mejor amig@ te dice que siente algo más que amistad por ti, ¿qué harías?",
    reto: "Reto",
    question2:
      "Dile a tu  mejor amig@ que sientes algo mas que amistad por el/ella."
  },
  {
    id: "94",
    Verdad: "Verdad",
    question: "¿Qué te dijeron la última vez que te rechazaron?",
    reto: "Reto",
    question2:
      "Cambia tu situación sentimental en Facebook a 'Casado con mi amig@'"
  },
  {
    id: "95",
    Verdad: "Verdad",
    question: "Di tres cosas a las que les tengas miedo.",
    reto: "Reto",
    question2: "Haz 10 abdominales."
  },
  {
    id: "96",
    Verdad: "Verdad",
    question: "¿Besarías a la peor enemiga de tu novi@ enfrente suyo?",
    reto: "Reto",
    question2: "Besa apasionadamente al jugador que peor te caiga."
  },
  {
    id: "97",
    Verdad: "Verdad",
    question: "¿Alguna vez gustaste de alguien mucho menor que tú?",
    reto: "Reto",
    question2:
      "haz 5 abdominales y después corre hasta que un jugador diga que pares."
  },
  {
    id: "98",
    Verdad: "Verdad",
    question: "¿Qué canción te da vergüenza admitir que te gusta?",
    reto: "Reto",
    question2:
      "publica un estado donde digas que tienes un amor prohibido y las iniciales de esa persona."
  },
  {
    id: "99",
    Verdad: "Verdad",
    question: "¿Te han puesto los cuernos?",
    reto: "Reto",
    question2: "Pégale una cachetada a uno de los participantes."
  },
  {
    id: "100",
    Verdad: "Verdad",
    question:
      "Si tu ex novia te presenta a su nuevo novio, ¿te pondrías celoso?",
    reto: "Reto",
    question2:
      "Dale 10 likes a distintas fotos de la persona de la que gustas secretamente."
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
        console.log("ready");
        this.setState({ isVisibleUE: true });
      }.bind(this),
      60000
    );
    console.log("ready");

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
      480000
    );
    setTimeout(
      function() {
        this.setState({ isVisibleRappi: true });
      }.bind(this),
      720000
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
    var RandomNumber = Math.floor(Math.random() * (99 - 0)) + 1;
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
                  <Text
                    style={{
                      color: "#4dd599"
                    }}
                  >
                    Verdad
                  </Text>
                  ,{" "}
                  <Text
                    style={{
                      color: "#ff0000"
                    }}
                  >
                    Reto
                  </Text>{" "}
                  o{" "}
                  <Text
                    style={{
                      color: "#f45905"
                    }}
                  >
                    Shot
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#4dd599",
                    paddingTop: 6,
                    fontSize: 21
                  }}
                >
                  {item.Verdad}
                </Text>
                <Text
                  style={{
                    color: "#4dd599",
                    paddingTop: 4,
                    fontSize: 21
                  }}
                >
                  {item.question}
                </Text>
                <Text
                  style={{
                    color: "#ff0000",
                    paddingTop: 6,
                    fontSize: 21
                  }}
                >
                  {item.reto}
                </Text>
                <Text
                  style={{
                    color: "#ff0000",
                    paddingTop: 4,
                    fontSize: 21
                  }}
                >
                  {item.question2}
                </Text>
                <Text
                  style={{
                    color: "#f45905",
                    paddingTop: 6,
                    fontSize: 21
                  }}
                >
                  Shot
                </Text>
                <Text
                  style={{
                    color: "#f45905",
                    paddingTop: 4,
                    fontSize: 21
                  }}
                >
                  Numero de tragos que debe beber si no dice la verdad o no
                  cumple el reto <Text>{this.state.currentIndexDrink}</Text>
                </Text>
                <Text
                  style={{
                    color: "#f5f0e3",
                    paddingTop: 6,
                    fontSize: 14
                  }}
                >
                  Pasa el celular a la persona alado de ti.
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
