import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Card, Button, Icon, Tile } from "react-native-elements";

export class CategoryStudent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.configView}>
        <ScrollView style={styles.sroolss}>
          <TouchableOpacity key={0}>
            <Tile
              onPress={() => this.props.navigation.navigate("QuitzAleatotio")}
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/aleatory.jpg")}
              title="ALEATORIO"
              featured
              caption="Serie de preguntas que desafiaran tu habilidad de tu conocimiento en Historia, Biologia, Fisica, Matematicas, Español, Derecho, etc. si llegas a fallar te toca tomar "
            ></Tile>
          </TouchableOpacity>
          <TouchableOpacity key={1}>
            <Tile
              onPress={() => this.props.navigation.navigate("QuitzDerecho")}
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/laws.jpg")}
              title="Derecho"
              featured
              caption="Demuestra tu destreza en la materia de DERECHO, juega solo o con tus amigos, no te preocupes que nosotros ponemos el castigo si te equivocas en las preguntas."
            ></Tile>
          </TouchableOpacity>
          {/* <TouchableOpacity key={2}>
            <Tile
              onPress={() => this.props.navigation.navigate("QuitzEconomia")}
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/economia.jpg")}
              title="Economia"
              featured
              caption="Demuestra tu destreza en la materia de ECONOMIA, juega solo o con tus amigos, no te preocupes que nosotros ponemos el castigo si te equivocas en las preguntas."
            ></Tile>
          </TouchableOpacity>
          <TouchableOpacity key={3}>
            <Tile
              onPress={() => this.props.navigation.navigate("QuitzIngenieria")}
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/ingles.jpg")}
              title="Ingles"
              featured
              caption="Demuestra tu destreza en la materia de INGLES, juega solo o con tus amigos, no te preocupes que nosotros ponemos el castigo si te equivocas en las preguntas."
            ></Tile>
          </TouchableOpacity>
          <TouchableOpacity key={4}>
            <Tile
              onPress={() => this.props.navigation.navigate("QuitzIngenieria")}
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/matematics.jpg")}
              title="Ingeniería"
              featured
              caption="Demuestra tu destreza en la materia de INGENIERÍA, juega solo o con tus amigos, no te preocupes que nosotros ponemos el castigo si te equivocas en las preguntas."
            ></Tile>
          </TouchableOpacity>
          <TouchableOpacity key={5}>
            <Tile
              onPress={() =>
                this.props.navigation.navigate("QuitzArquitectura")
              }
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/medicina.jpg")}
              title="Medicina"
              featured
              caption="Demuestra tu destreza en la materia de MEDICINA, juega solo o con tus amigos, no te preocupes que nosotros ponemos el castigo si te equivocas en las preguntas."
            ></Tile>
          </TouchableOpacity>
          <TouchableOpacity key={6}>
            <Tile
              onPress={() => this.props.navigation.navigate("")}
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/psicology.png")}
              title="Psicología"
              featured
              caption="Demuestra tu destreza en la materia de PSICOLOGÍA, juega solo o con tus amigos, no te preocupes que nosotros ponemos el castigo si te equivocas en las preguntas."
            ></Tile>
          </TouchableOpacity>
          <TouchableOpacity key={7}>
            <Tile
              onPress={() => this.props.navigation.navigate("")}
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/arqui.jpg")}
              title="Arquitectura"
              featured
              caption="Demuestra tu destreza en la materia de ARQUITECTURA, juega solo o con tus amigos, no te preocupes que nosotros ponemos el castigo si te equivocas en las preguntas."
            ></Tile>
          </TouchableOpacity> */}
          <View>
            <Button
              onPress={() => this.props.navigation.goBack()}
              buttonStyle={styles.BtnStyle}
              title="Atras"
              icon={
                <Icon
                  name="check"
                  size={20}
                  color="#fbe555"
                  style={{ marginRight: 4 }}
                />
              }
            ></Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  configView: {
    flex: 1,
    backgroundColor: "#19212E"
  },
  sroolss: {
    marginBottom: 20,
    marginTop: 23
  },
  BtnStyle: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: "#da4302",
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 7
  },
  viewSeparated: {
    flexDirection: "row"
  },
  Tilestyle: {
    marginTop: 10
  },
  stylefisrts: {
    marginTop: 25
  }
});
export default CategoryStudent;
