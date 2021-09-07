import React from 'react'
import { StyleSheet, Text, ScrollView, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Content, Item, Form, Label, NativeBaseProvider } from 'native-base';
// import Forms from '../Component/Form';

export default function Formss({ navigation }) {

  return (
    <ScrollView>
      <NativeBaseProvider>

        <View>
          <ImageBackground source={require('../assets/FromBG.jpg')} style={{ width: '100%', height: '100%', }}>
            <View style={{ padding: 20 }}>
              <KeyboardAvoidingView>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginVertical: "2%" }}>
                  {/* <Ionicons name="md-chevron-back" size={44} color="white" /> */}
                </TouchableOpacity>
                {/* <Forms/> */}
              </KeyboardAvoidingView>
              <TouchableOpacity onPress={() => navigation.replace('Detailsscreen')}
                style={{ marginVertical: "4%" }}>
                {/* <Ionicons name="md-chevron-forward" size={44} color="white" /> */}
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
})
