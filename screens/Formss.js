import React from 'react'
import { StyleSheet, Text, ScrollView, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Content, Item, Form, Label, NativeBaseProvider } from 'native-base';

export default function Formss({ navigation }) {

  return (
    <ScrollView>
      <NativeBaseProvider>

        <View>
          <ImageBackground source={require('../assets/FromBG.jpg')} style={{ width: '100%', height: '100%', }}>
            <View style={{ padding: 20 }}>
              <KeyboardAvoidingView>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginVertical: "2%" }}>
                </TouchableOpacity>
              </KeyboardAvoidingView>
              <TouchableOpacity onPress={() => navigation.replace('Detailsscreen')}
                style={styles.opacity}>
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>
      </NativeBaseProvider>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  textInput: {
    color: '#fff',
    // borderColor: '#edef11',
    color: "white"
  },
  opacity:{ marginVertical: "4%" },
})
