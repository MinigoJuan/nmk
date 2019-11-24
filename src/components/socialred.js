import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { SocialIcon } from "react-native-elements";

const socialred = () => {
  return (
    <View style={styles.IconsView}>
      <SocialIcon
        light
        type="twitter"
        onPress={() => {
          Linking.openURL("twitter://user?screen_name=MinigoApp");
        }}
      />
      <SocialIcon
        light
        type="instagram"
        onPress={() => {
          Linking.openURL("instagram://user?username=minigoapp");
        }}
      />
      <SocialIcon
        light
        type="facebook"
        onPress={() => {
          Linking.openURL("fb://profile/109469397165034");
        }}
      />
    </View>
  );
};
// cambiar y hacer paginas de la app

const styles = StyleSheet.create({
  IconsView: {
    flexDirection: "row",
    marginBottom: 8
  }
});
export default socialred;
