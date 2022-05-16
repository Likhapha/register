import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { useState } from 'react';
import Sign from './Sign';
import Login from './Login';


export default function App() {

  const [signed, setSigned] = useState(false)


  function Sign_in() {
    if (signed === false) {
      setSigned(true)
    }

    else {
      setSigned(false)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.online}>
        <Text style={styles.myText}>WELCOME</Text>

        {signed ? <Login /> : <Sign />}

        <TouchableOpacity onPress={Sign_in}>
          <View style={{ backgroundColor: 'silver', borderRadius: 1, justifyContent: 'center' }}>
            <Text style={styles.sam}>Sign_in.</Text>
          </View>
        </TouchableOpacity>



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

  online: {
    justifyContent: 'center',
    marginVertical: 10
  },
  myText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 20,
    borderRadius: 1
  },
  sam: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -120,
    borderRadius: 1,
    borderColor: 'red',
    marginVertical: 10
  }
});
