import React, { useEffect } from "react";import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from "react-native";
import { BlurView } from "expo-blur";

// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './firebase-config';

import { useNavigation } from "@react-navigation/native";
import { COLORS, ROUTES } from "../constants";

const uri =
  "https://images.unsplash.com/photo-1682575555626-71e40faa7b08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80";
const profilePicture =
  "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B940%2C906%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Fblack-cat-peeking-over-table-908714708-2000.jpg";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  //const app = initializeApp(firebaseConfig);
  //const auth = getAuth(app);

  const handleCreateAccount = () => {
    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   console.log('Account created!')
    //   const user = userCredential.user;
    //   console.log(user)
    // })
    // .catch(error => {
    //   console.log(error)
    //   Alert.alert(error.message)
    // })
  };

  const handleSignIn = () => {
    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   console.log('Signed in!')
    //   const user = userCredential.user;
    //   console.log(user)
    //   navigation.navigate('Home');
    // })
    // .catch(error => {
    //   console.log(error)
    // })
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <View style={{ width: 100, height: 100, backgroundColor: COLORS.primary, position: "absolute" }}></View>
      <View
        style={{ width: 100, height: 100, backgroundColor: COLORS.secondary, top: 120, position: "absolute", transform: [{ rotate: "25deg" }] }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: COLORS.terciary,
          bottom: 120,
          position: "absolute",
          borderRadius: 50,
          transform: [{ rotate: "50deg" }],
        }}
      ></View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView intensity={100}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>E-mail</Text>
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Ingresa tu correo" />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>Password</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Ingresa tu contraseña" secureTextEntry={true} />
            </View>
            <TouchableOpacity onPress={handleSignIn} style={[styles.button, { backgroundColor: COLORS.primary }]}>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, { backgroundColor: COLORS.secondary }]}>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  login: {
    width: 350,
    height: 500,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
});
