import { Button, StyleSheet, TextInput, View, Text } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { router } from "expo-router";
import { useState } from "react";

export default function LoginScreen() {
  const users: any = [];
  const subjects = [];
  for (let i = 1; i <= 5; i++) {
    subjects.push(`subject${i}`);
    users.push({
      username: `zang${i}`,
      password: "1",
      subjects: [...subjects],
    });
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState({});
  let user = {};

  const handleLogin = (username: string, password: string) => {
    for (let i = 0; i <= 4; i++)
      if (username === users[i].username && password === users[i].password) {
        user = users[i];
        return true;
      }
    return false;
  };

  const [data, setData] = useState([]);

  const handlePress = async () => {
    fetch("http://universities.hipolabs.com/search?country=United%20States")
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          onChangeText={setUsername}
          autoFocus
          placeholder="Username"
        ></TextInput>
      </View>
      <View style={styles.textInput}>
        <TextInput
          onChangeText={setPassword}
          autoFocus
          placeholder="Password"
        ></TextInput>
      </View>

      <View style={styles.separator} />
      <Button
        onPress={() => {
          if (handleLogin(username, password))
            router.push({ pathname: "/(tabs)/home/user", params: { ...user } });
          else alert("invalid");
        }}
        title="Login"
      ></Button>
      <View style={{ marginTop: 20 }}>
        <Button
          onPress={() => {
            handlePress();
          }}
          title="Fetch API"
        ></Button>
      </View>
      <View style={styles.container}>
        {data.map((data: string) => (
          <View >
            <Text >{data}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    width: "70%",
    padding: 10,
    marginBottom: 30,
  },
});
