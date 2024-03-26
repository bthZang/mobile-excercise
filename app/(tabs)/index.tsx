import { Button, StyleSheet, TextInput, View, Text } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View><TextInput ></TextInput></View>
      
      <View style={styles.separator} />
      <Button onPress={() => {
        router.push('/(tabs)/home/user')
      }} title='Login'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
