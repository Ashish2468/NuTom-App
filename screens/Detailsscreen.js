import React, { Component, useState } from 'react'
import { Text, StyleSheet, ScrollView, Image, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import Details from '../Component/Details';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SCarousel from '../Component/SCarousel';

export default function Detailsscreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffe8d6" ,paddingTop:5 }}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} style={{}}>
          <View style={{ flexDirection: 'row', marginLeft: "1%", paddingHorizontal: 5 }}>
            <View style={{ flex: 1 }}>

              <TouchableOpacity
              // onPress={() => navigation.navigate('Formscreen')} 
              onPress={() => navigation.goBack()}
              
              style={{ marginVertical: "2%", marginTop: "2%", }}>
                <Ionicons name="md-chevron-back" size={44} color="black" />
                {/* <Text style={{fontSize:58, }}>{'<'}</Text> */}
                
              </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center', justifyContent: 'space-between', flex: 2, marginLeft: 20 }}>
              <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Details  </Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 6 }}>
            <Details />

          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
