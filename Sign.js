
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Sign() {


  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <Text style={{ color: 'blue', fontSize: 12, fontWeight: 'bold' }}></Text>
        <TextInput placeholder='Enter Fist name' style={styles.names}></TextInput>
        <TextInput placeholder='Enter Phone number' style={styles.names}></TextInput>
        <TextInput placeholder='Enter Email Addres' style={styles.names}></TextInput>
        <TextInput placeholder='Enter Password' style={styles.names}></TextInput>
        <TextInput placeholder='Confirm Password' style={styles.names}></TextInput>

      </View>


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

  man: {
    borderWidth: 2,
    width: 100,

  },

  names: {
    justifyContent: 'center',
    fontSize: 12,
    borderRadius: 1,
    fontSize: 16,
    fontWeight: 'normal',
    borderColor: 'blue',
    backgroundColor: "#FF1493",
    marginVertical: 5,
    padding: 5
  },

  detail: {
    borderColor: 'gray',
    height: 40,
    marginVertical: 10
  }
});