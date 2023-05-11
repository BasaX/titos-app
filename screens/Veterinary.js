import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Veterinary = () => {
  return (
    <View style={styles.container}>
      <Text>Proximamente Veterinarias</Text>
    </View>
  );
};

export default Veterinary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
