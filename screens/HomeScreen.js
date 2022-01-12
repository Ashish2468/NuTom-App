import React from 'react'
import { StyleSheet, Text, Image, View, Button, ScrollView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#ffe5d9", flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: 'flex-end', width: "100%" }}>
        <Image source={require('../assets/Googlelx.png')}
          style={{}} />
      </View>
      <View style={{ justifyContent: 'space-between', paddingHorizontal: 25, paddingBottom: 50 }}>

        <View>
          <Text style={{ fontSize: 40, fontWeight: "bold", marginVertical: "2%" }}>OLYMPIAD 2.0</Text>
        </View>
        <Text style={{ marginVertical: "6%" }}> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi odit aspernatur laborum quisquam. Expedita iste temporibus magnam corrupti ducimus"</Text>

        
        <View style={{ alignItems: 'center', }}>
          <TouchableOpacity style={styles.button}
            // onPress={() => navigation.navigate('Formscreen')}
          onPress={() => navigation.navigate('Form')}
            
            >
            <LinearGradient colors={['#FF512F', '#F09819', '#FF512F']} style={styles.buttonContainer} 
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            >
              <Text style={styles.Text}>
                Register Now!
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 23,
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: "17%",
    paddingVertical: "2.5%",
  },
})
