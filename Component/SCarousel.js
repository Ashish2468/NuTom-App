import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Container, Header, Content, Item, Input, Form, Label, NativeBaseProvider } from 'native-base';
import { TextInput } from 'react-native-paper';
import CCarousel from './CCarousel';
import {windowHeight, windowWidth} from '../utils/Dimentions';

export default function SCarousel() {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ textAlignVertical: "center", textAlign: 'center', fontSize: 24, fontWeight: "bold", marginTop: "2%", color: "black" }}>Sections</Text>

      <ScrollView horizontal style={{ marginHorizontal: -40, marginTop: 15 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', overflow: 'visible' }}>

          <View>
            <View style={{ flex: 1, height: 350, width: windowHeight/1.7, marginHorizontal: 10, paddingLeft: 20 }}>
              <View style={{ backgroundColor: "#eee", borderRadius: 14, alignItems: 'center', padding: 5, }}>
                <View style={{ paddingHorizontal: 60 }}>
                  <Image source={require('../assets/s11.png')} />
                </View>
                <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>Socio-Emotional Skills</Text>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, paddingHorizontal: 10, textAlignVertical: "center", textAlign: 'center', }}>Skills required to express emotions and to develop meaningful connections</Text>
                </View>
              </View>
            </View>
          </View>


          <View>
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <View style={{ backgroundColor: "#eee", width: windowHeight/1.7, borderRadius: 14, alignItems: 'center', padding: 5, }}>
                <View style={{ paddingHorizontal: 60 }} >
                  <Image source={require('../assets/s122.png')} style={{ marginVertical: 14 }} />
                </View>
                <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>Functional Skills</Text>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, paddingHorizontal: 10, textAlignVertical: "center", textAlign: 'center', }}>Skills required in day to day life to perform any task, including Cognitive Skills</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={{ flex: 1, height: 350, width: windowHeight/1.7, marginHorizontal: 10 ,paddingRight:20}}>
              <View style={{ backgroundColor: "#eee", borderRadius: 14, alignItems: 'center', padding: 5, }}>
                <View style={{ paddingHorizontal: 60 }}>
                  <Image source={require('../assets/s13.png')} />
                </View>
                <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>Knowledge Based Skills </Text>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, paddingHorizontal: 10, textAlignVertical: "center", textAlign: 'center', }}>Knowledge and expertise acquired from books or other references </Text>
                </View>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
