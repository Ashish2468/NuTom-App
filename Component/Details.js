import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Content, Item, Input, Form, Label, NativeBaseProvider } from 'native-base';
import { TextInput } from 'react-native-paper';
import SCarousel from './SCarousel';
import CCarousel from './CCarousel';
import {windowHeight, windowWidth} from '../utils/Dimentions';


export default function Details({ navigation }) {
  return (
    <View style={{}}>
      <View style={{ width: "100%",  backgroundColor: "white", paddingHorizontal: 15, borderRadius: 40,paddingVertical:15 ,marginTop:10 }}>

        <View>
          <Image source={require('../assets/ocket.png')}
            style={{ width: "100%", height: 300, borderRadius: 40 }} />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ alignSelf: "center", fontSize: 24, fontWeight: "bold", marginTop: "2%", color: "black" }}>What is NuTom{'\n'}Olympiad 2.0 ?</Text>
        </View>
        <View style={{ justifyContent: "center", alignContent: 'center', }}>
          {/* <Text style={{ justifyContent: "center", alignItems: 'center', fontSize: 18, marginTop: 6 }}>
          NuToM Olympiad 2020 is an Online Olympiad by NURTURING TOMORROW’S MINDS- NuToM
          NuToM Olympiad 2020 Assesses students on SOCIO-EMOTIONAL SKILLS, FUNCTIONAL & KNOWLEDGE BASED SKILLS
          Olympiad for students of CLASSES I - X
          To be held on
          27 DECEMBER, 2020
        </Text> */}
          <Text style={{ textAlignVertical: "center", textAlign: 'justify', flex: 1, fontSize: 19,marginVertical:5 }}>
            NuToM Olympiad 2020 is an Online Olympiad by NURTURING TOMORROW’S MINDS- NuToM{'\n'}
            NuToM Olympiad 2020 Assesses students on SOCIO-EMOTIONAL SKILLS, FUNCTIONAL & KNOWLEDGE BASED SKILLS{'\n'}
            Olympiad for students of CLASSES I - X
            To be held on
            27 DECEMBER, 2020</Text>

        </View>
        <View style={{}}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ height: 150, width: 150, backgroundColor: "#ffe169", width:windowWidth/2.5 ,borderRadius: 14, alignItems: 'center', padding: 5, margin: 10 }}>
              <Image source={require('../assets/1nubula.png')} />
              <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>NEBULAS</Text>
              <Text style={{ fontSize: 15, paddingTop: 1 }}>CLASSES 1-2</Text>
            </View>
            <View style={{ height: 150, width: 150, backgroundColor: "#f7a399", width:windowWidth/2.5 ,borderRadius: 14, alignItems: 'center', padding: 5, margin: 10 }}>
              <Image source={require('../assets/PROTOSTARS.png')} />
              <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>PROTOSTARS</Text>
              <Text style={{ fontSize: 15, paddingTop: 1 }}>CLASSES 3-5</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ paddingHorizontal: 33, backgroundColor: "#f79d65",width:windowWidth/2.5 , borderRadius: 14, alignItems: 'center', padding: 5, margin: 10 }}>
              <Image source={require('../assets/14Tauris.png')} />
              <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>TAURIS</Text>
              <Text style={{ fontSize: 15, paddingTop: 1 }}>CLASSES 6-8</Text>
            </View>
            <View style={{ height: 150, width: 150, backgroundColor: "#e9f5db",width:windowWidth/2.5 , borderRadius: 14, alignItems: 'center', padding: 5, margin: 10 }}>
              <Image source={require('../assets/15supernovas.png')} />
              <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>SUPERNOVAS</Text>
              <Text style={{ fontSize: 15, paddingTop: 1 }}>CLASSES 9-10</Text>
            </View>
          </View>

        </View>

        <View style={{ justifyContent: 'center', marginVertical: 10 }}>
          <Text style={{ textAlignVertical: "center", textAlign: 'center', fontSize: 24, fontWeight: "bold", marginTop: "2%", color: "black" }}>Why NuTom{'\n'}Olympiad 2.0 ?</Text>
        </View>

        {/* <View>
          <View style={{ backgroundColor: "#bbb" }}>
            <Image source={require('../assets/9think.jpg')} style={{ position: "relative", alignSelf: 'center' }} />
            <Text style={{ textAlignVertical: "center", textAlign: 'justify', flex: 1, fontSize: 19, position: "absolute" }}>
              To prepare children for the UNPREDICTABLE TOMORROW, we need to NURTURE them TODAY. We need to make them compassionate, intellectual and proficient individuals by developing their RESILIENCE, CREATIVITY AND INQUISITIVENESS.
              Here comes NuToM Olympiad 2020 which provides students an assessment of their life skills, give insights into the scope of improvement suggests, helps students to improve on those. </Text>
          </View>
        </View> */}
        <ImageBackground source={require('../assets/think2.jpg')}
          style={{ width: windowWidth/1.11, resizeMode: 'contain' }}
        >
          <Text style={{ textAlignVertical: "center", textAlign: 'justify', flex: 1, fontSize: 19, }}>
            To prepare children for the UNPREDICTABLE TOMORROW, we need to NURTURE them TODAY. We need to make them compassionate, intellectual and proficient individuals by developing their RESILIENCE, CREATIVITY AND INQUISITIVENESS.
            Here comes NuToM Olympiad 2020 which provides students an assessment of their life skills, give insights into the scope of improvement suggests, helps students to improve on those. </Text>
        </ImageBackground>
        <View>
          <View style={{ justifyContent: 'center', }}>
            <SCarousel />
            <CCarousel />

          </View>
        </View>


      </View>


    </View>
  )
}

const styles = StyleSheet.create({})
