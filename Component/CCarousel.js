import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Container, Header, Content, Item, Input, Form, Label, NativeBaseProvider } from 'native-base';
import { TextInput } from 'react-native-paper';
import {windowHeight, windowWidth} from '../utils/Dimentions';

export default function CCarousel() {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ textAlignVertical: "center", textAlign: 'center', fontSize: 24, fontWeight: "bold", marginTop: "2%", color: "black" }}>COURSE OF ACTION</Text>

      <ScrollView horizontal style={{ marginHorizontal: -40, marginTop: 15 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', overflow: 'visible' }}>

          <View>
            <View style={{ flex: 1, height: 350, width: windowHeight/1.7, marginHorizontal: 10, paddingLeft: 20 }}>
              <View style={{ backgroundColor: "#eee", borderRadius: 14, alignItems: 'center', padding: 5, }}>
                <View style={{ paddingHorizontal: 60 }}>
                  <Image source={require('../assets/Group2421.png')} style={{ marginVertical: 10.5 }}/>
                </View>
                <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>DEEP INSIGHTS</Text>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, paddingHorizontal: 10, textAlignVertical: "center", textAlign: 'center', }}>A Detailed Student Performance Analysis in different types of skills, Qualities, Areas of Improvement, Suggestions on How to Work upon those</Text>
                </View>
              </View>
            </View>
          </View>


          <View>
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <View style={{ backgroundColor: "#eee", width: windowHeight/1.7, borderRadius: 14, alignItems: 'center', padding: 5, }}>
                <View style={{ paddingHorizontal: 60 }}>
                  <Image source={require('../assets/Group2422.png')} style={{ marginVertical: 10 }} />
                </View>
                <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>NuToM COINS</Text>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, paddingHorizontal: 10, textAlignVertical: "center", textAlign: 'center', }}>There is no marks’ system in the assessment, students are appreciated by points for each victory they make, and partially rewarded for each attempt they make</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={{ flex: 1, height: 350, width: windowHeight/1.7, marginHorizontal: 10 }}>
              <View style={{ backgroundColor: "#eee", borderRadius: 14, alignItems: 'center', padding: 5, }}>
                <View style={{ paddingHorizontal: 60 }}>
                  <Image source={require('../assets/Group2623.png')} style={{ marginVertical: 14 }} />
                </View>
                <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>ADAPTIVE LEARNING</Text>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, paddingHorizontal: 10, textAlignVertical: "center", textAlign: 'center', }}>The test’s algorithm is based on improvement all along.
A good answer promotes the student, while a not so good answer gives opportunity to the student to rise again</Text>
                </View>
              </View>
            </View>
          </View>
          
          <View>
            <View style={{ flex: 1, height: 350, width: 350, marginHorizontal: 10 ,paddingRight:20 }}>
              <View style={{ backgroundColor: "#eee", borderRadius: 14, alignItems: 'center', padding: 5, }}>
                <View style={{ paddingHorizontal: 60 }}>
                  <Image source={require('../assets/Group2524.png')} style={{ marginVertical: 20, }} />
                </View>
                <Text style={{ fontWeight: "900", fontSize: 18, paddingTop: 8 }}>GAMIFICATION</Text>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, paddingHorizontal: 10, textAlignVertical: "center", textAlign: 'center', }}>Learning can be best achieved with student’s interest, our exciting gamified tournaments are targeted towards lighting a SPARK OF LEARNING in young minds </Text>
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
