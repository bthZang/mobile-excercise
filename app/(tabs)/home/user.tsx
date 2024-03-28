import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function UserScreen() {
  const user = useLocalSearchParams() as Record<string, any>;
  user.subjects = user.subjects.split(",");

  return (
    <View style={styles.container}>
      {user.subjects.map((subject: string) => (
        <View style={styles.frame}>
          <Text style={styles.item}>{subject}</Text>
        </View>
      ))}
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
  frame: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
    padding: 10,
    marginBottom: 30,
  },
  item: {
    fontSize: 18,
    color: "#252520",
    alignSelf: "center",
  },
});
