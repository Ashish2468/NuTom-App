import React from 'react'
// import { StyleSheet, Text, View,Button } from 'react-native'

import { StyleSheet, Text, ScrollView, Button, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Content, Item, Label, NativeBaseProvider } from 'native-base';
// // import { TextInput } from 'react-native-paper';
// // import { Input } from 'react-native-elements';
// import Forms from '../Component/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
// // import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Forms from '../Component/Form';


export default function Form({ navigation }) {
  return (
    <View>
      <ImageBackground source={require('../assets/FromBG.jpg')} style={{ width: '100%', height: '100%', }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginVertical: "2%" }}>
                <Ionicons name="md-chevron-back" size={44} color="white" />
                <Icon ios="ios-add" android="md-add" />
              </TouchableOpacity>
              <Forms />
            <TouchableOpacity onPress={() => navigation.replace('Detailsscreen')}
              style={{ marginVertical: "4%" }}>
              <Ionicons name="md-chevron-forward" size={44} color="white" />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>

    // </View>
  )
}

const styles = StyleSheet.create({})
