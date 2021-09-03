// /* eslint-disable prettier/prettier */
// import React, { useState, useEffect, Component } from 'react'
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
// import * as firebase from 'firebase';
// import { firebaseConfig } from '../config';
// import { ListItem, List } from 'native-base';

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }


// export default class Home extends Component {


//   state = {
//     text: '',
//     mylist: [],
//     counter:2100,
//   }

//   saveitem() {
//     const mytext1 = firebase.database().ref('mytext1');
//     mytext1.push().set({
//       text: this.state.text,
//       time: Date.now(),
//       counter:'NUTOLP'+this.state.counter,
//     })
//     this.setState({ text: '' ,counter: this.state.counter + 1})
//   }
//   render() {
//     const counter = this.state.counter;
//     return (
//       <View>
//         <Text>Hi hello</Text>
//         <TextInput
//           label="text1"
//           value={this.state.text}
//           onChangeText={(text) => this.setState({ text })}
//           mode="outlined"
//           underlineColor="black"
//           outlineColor="green"
//         />
//         <Button
//           onPress={() => this.saveitem()}
//         >Button</Button>
//         <View style={styles.container}>
//           <Text style={styles.counter}>RollNumber: NUTOLP{counter}</Text>
//           <TouchableOpacity
//             style={styles.floatingButton}
//             onPress={this.onIncrement}
//           ><Text>Counter</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     )
//   };
//   onIncrement = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     })
//   };

// }

// const styles = StyleSheet.create({})
