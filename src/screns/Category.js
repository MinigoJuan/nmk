import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card, Button, Icon, Tile } from "react-native-elements";

export class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.configView}>
        <ScrollView style={styles.sroolss}>
          <View style={styles.stylefisrts}>
            <TouchableOpacity key={0}>
              <Tile
                onPress={() => this.props.navigation.navigate("addFriends")}
                containerStyle={styles.Tilestyle}
                imageSrc={require("../../assets/imagesofCategories/photofriends.jpg")}
                title="Ponte Pedo"
                featured
                caption="Juega cuando estes con tus amigos, en App Beer y diviertete poniendo retos a tus amigos en las fiestas."
              ></Tile>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity key={1}>
              <Tile
                onPress={() => this.props.navigation.navigate("QuitzShot")}
                containerStyle={styles.Tilestyle}
                imageSrc={require("../../assets/imagesofCategories/tequila.jpg")}
                title="Verdad, Reto o Shot"
                featured
                caption="Llena de shots el ambiente de SHOT´S, todos tienen el poder de repartir shot´s a todo el mundo. "
              ></Tile>
            </TouchableOpacity>
            <View>
              <TouchableOpacity key={2}>
                <Tile
                  onPress={() => this.props.navigation.navigate("QuitzHot")}
                  containerStyle={styles.Tilestyle}
                  imageSrc={require("../../assets/imagesofCategories/kiss.png")}
                  title="Modo Hot"
                  featured
                  caption="Este modo es especial cuando quieres prender el ambiente, reverlar secretos, poner retos y tener mucha suerte con tu crush."
                ></Tile>
              </TouchableOpacity>
            </View>
          </View>

          {/* <TouchableOpacity key={3}>
              <Tile
                onPress={() => this.props.navigation.push("CategoryStudent")}
                containerStyle={styles.Tilestyle}
                imageSrc={require("../../assets/imagesofCategories/student.jpg")}
                title="Modo Estudiante"
                featured
                caption="Diviertete estudiando y poniendo bebiendo con tus amigos, Hay preguntas de toda materia, Derecho, Español, Matematicas, Ingles, ETC."
              ></Tile>
            </TouchableOpacity> */}

          {/* <TouchableOpacity key={4}>
              <Tile
                onPress={() => this.props.navigation.navigate("Redes")}
                containerStyle={styles.Tilestyle}
                imageSrc={require("../../assets/imagesofCategories/redes.jpg")}
                title=""
                featured
                caption=""
              ></Tile>
            </TouchableOpacity> */}

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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  configView: {
    flex: 1,
    backgroundColor: "#19212E",
  },
  sroolss: {
    marginBottom: 20,
  },
  BtnStyle: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: "#da4302",
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 7,
  },
  viewSeparated: {
    flexDirection: "row",
  },
  Tilestyle: {
    marginTop: 10,
  },
  stylefisrts: {
    marginTop: 25,
  },
});
export default Category;
