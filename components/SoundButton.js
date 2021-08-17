import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class DJbutton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:this.props.uri,
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.button,
   {backgroundColor:this.props.bgcolor}]}
        onPress={this.playSound}>
         <Text style={styles.buttonText}>
          {this.props.text}
         </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
   
          
          marginTop: 10,
          marginLeft: 75,
          borderWidth: 2,
          borderColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 80,
          borderRadius: 50,
  },
  buttonText: {

  fontSize: 15,
  }
});

export default DJbutton;