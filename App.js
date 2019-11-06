import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserNav from "./src/navigations/user";
export default function App() {
  return (
    <View style={styles.container}>
      <UserNav></UserNav>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19212E"
  }
});
