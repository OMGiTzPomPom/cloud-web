import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { signup } from "./firebase/auth_signup_password";
import { signin } from "./firebase/auth_signin_password";

export default function App() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        ></TextInput>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password} secureTextEntry={true}
        ></TextInput>
        <Button title="Sign Up!" onPress={() => signup(email, password)} />
          <br/>
        <Button title="Sign In!" onPress={() => signin(email, password)} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10
    }
});
