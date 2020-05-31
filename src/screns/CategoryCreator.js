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
              onPress={() => this.props.navigation.navigate("")}
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/contenid.jpg")}
              title=""
              featured
              caption=""
            ></Tile>
          </TouchableOpacity>
          <TouchableOpacity key={1}>
            <Tile
              onPress={() => this.props.navigation.navigate("")}
              containerStyle={styles.Tilestyle}
              imageSrc={require("../../assets/imagesofCategories/contenid.jpg")}
              title=""
              featured
              caption=""
            ></Tile>
          </TouchableOpacity>

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
