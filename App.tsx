import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'
export default function App() {
  const [text,setText] = useState(" ");

  return (
    <View style={styles.container}>
      <Text>Teste</Text>
      <TextInput style={styles.input} onChangeText={(value)=>console.log(value)}></TextInput>
      <TextInput style={styles.input} onChangeText={(value)=>setText(value)}></TextInput>
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: 180,
    borderBottomWidth: 2
  }
});
