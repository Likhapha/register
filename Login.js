import { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import React from 'react';

export default function Logoin() {

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TextInput placeholder='Enter Email Address' style={styles.myText}></TextInput>
                <TextInput placeholder='Enter Password' style={styles.myText}></TextInput>
                <Text>Forgot Password?</Text>
            </View>
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

    menu: {
        borderColor: 'gray',
        height: 40,
        marginVertical: 10,
        marginTop: 60
    },

    myText: {
        color: 'blue',
        padding: 5,
        marginVertical: 5,
        justifyContent: "center",
        backgroundColor: "#FF1493",
    },
});
