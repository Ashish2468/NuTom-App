import React from 'react'
import { StyleSheet, Text, ScrollView, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Content, Item, Form, Label, NativeBaseProvider } from 'native-base';
// import { TextInput } from 'react-native-paper';
// import { Input } from 'react-native-elements';
import Forms from '../Component/Form';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-ionicons'
export default function Formscreen({ navigation }) {

  return (

    <View>
      <ImageBackground source={require('../assets/FromBG.jpg')} style={{ width: '100%', height: '100%', }}>
        <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={{ padding: 20 }}>
            <KeyboardAvoidingView>
              <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginVertical: "2%" }}>
                <Ionicons name="md-chevron-back" size={44} color="white" />
                {/* <Text style={{fontSize:58,color:"white"}}>{'<'}</Text> */}
                {/* <Icon name="rocket" size={30} color="#900" /> */}
                
              </TouchableOpacity>
              {/* <Forms /> */}
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={() => navigation.replace('Detailsscreen')}
              style={{ marginVertical: "4%" }}>
              {/* <Text style={{fontSize:58,color:"white"}}>{'>'}</Text> */}

              <Ionicons name="md-chevron-forward" size={44} color="white" />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  textInput: {
    color: '#fff',
    // borderColor: '#edef11',
    color: "white"
  },
})