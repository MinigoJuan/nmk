import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Linking,
  Alert
} from "react-native";
import { Button, Overlay, SocialIcon } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  Hangletogo = () => {
    this.props.navigation.navigate("Category");
    this.setState({
      isVisible: true
    });
  };

  _handleOpenURL = () => {
    let appUrl = `twitter://user?screen_name=minigoapp`;
    Linking.canOpenURL(appUrl)
      .then(supported => {
        if (!supported) {
          Alert.alert(
            "¿Estas seguro que 'Minigo' pueda abrir 'Twitter'?",
            " ",
            [
              {
                text: "OK",
                onPress: () => {
                  Linking.openURL(`twitter://user?screen_name=minigoapp`);
                }
              },
              { text: "Cancelar", onPress: () => {}, style: "cancel" }
            ],
            { cancelable: false }
          );
        } else {
          return Linking.openURL(appUrl);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  _handleOpenURLI = () => {
    let appUrl = `instagram://user?username=minigoapp`;
    Linking.canOpenURL(appUrl)
      .then(supported => {
        if (!supported) {
          Alert.alert(
            "¿Estas seguro que 'Minigo' pueda abrir 'Instagram'?",
            "",
            [
              {
                text: "OK",
                onPress: () => {
                  Linking.openURL("instagram://user?username=minigoapp");
                }
              },
              { text: "Cancelar", onPress: () => {}, style: "cancel" }
            ],
            { cancelable: false }
          );
        } else {
          return Linking.openURL(appUrl);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  _handleOpenURLF = () => {
    let appUrl = `fb://profile/109469397165034`;
    Linking.canOpenURL(appUrl)
      .then(supported => {
        if (!supported) {
          Alert.alert(
            "¿Estas seguro que 'Minigo' pueda abrir 'FaceBook'?",
            "",
            [
              {
                text: "OK",
                onPress: () => {
                  Linking.openURL("fb://profile/109469397165034");
                }
              },
              { text: "Cancelar", onPress: () => {}, style: "cancel" }
            ],
            { cancelable: false }
          );
        } else {
          return Linking.openURL(appUrl);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    return (
      <View style={styles.configView}>
        {/* TITULO */}
        {/* Imagen */}
        {/* Jugadores */}
        {/* Iniciar */}
        <View style={styles.Textstyle}>
          <Image
            resizeMode="contain"
            style={{ width: 300, height: 180 }}
            PlaceholderContent={<ActivityIndicator />}
            source={require("../../assets/imagesofCategories/logobeer.png")}
          ></Image>
        </View>
        <View>
          <Image
            PlaceholderContent={<ActivityIndicator />}
            style={styles.ImageView}
            source={require("../../assets/imagenbeer.png")}
          ></Image>
        </View>
        <View>
          <Button
            onPress={() => this.Hangletogo()}
            buttonStyle={styles.BtnStyle}
            title="Comienza"
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
        <View>
          <Text style={{ color: "#f9f6f7" }}>Enviarnos tus preguntas por:</Text>
          <View style={styles.IconsView}>
            <SocialIcon light type="twitter" onPress={this._handleOpenURL} />
            <SocialIcon light type="instagram" onPress={this._handleOpenURLI} />
            <SocialIcon light type="facebook" onPress={this._handleOpenURLF} />
          </View>
        </View>
        <Overlay
          borderRadius={10}
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          windowBackgroundColor="rgba(255, 255, 255, .3)"
          overlayBackgroundColor="#222c3d"
          width={300}
          height={300}
        >
          <View
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <View style={{ alignSelf: "flex-end", marginBottom: 10 }}>
              <Icon
                size={40}
                raised
                name="times-circle"
                type="font-awesome"
                color="#ffd739"
                onPress={() => this.setState({ isVisible: false })}
              />
            </View>
            <View style={{ margin: 6 }}>
              <Text
                style={{
                  marginBottom: 10,
                  fontWeight: "normal",
                  fontSize: 15,
                  color: "#f7be16"
                }}
              >
                El abuso del consumo del alcohol puede ser perjudicial para tu
                salud, Te recomendamos que si utilizas Minigo debes ser mayor de
                18 años
              </Text>
            </View>
            <View style={{ marginTop: 8, marginBottom: 3 }}>
              <Image
                source={require("../../assets/alcholism.png")}
                style={{ width: 100, height: 100 }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  configView: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#19212E",
    alignContent: "space-around",
    flexWrap: "wrap",
    flex: 1
  },
  Textstyle: {
    marginTop: 35
  },
  TextInitial: {
    fontSize: 28,
    color: "white"
  },
  ImageView: {
    width: 190,
    height: 180
  },
  BtnStyle: {
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#da4302"
  },
  IconsView: {
    flexDirection: "row",
    marginBottom: 8
  }
});

export default index;
