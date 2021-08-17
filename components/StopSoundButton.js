import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class DJStopbutton extends React.Component {

  render() {
    return (
      <TouchableOpacity
        style={[styles.button,
        {backgroundColor:this.props.bgcolor}]}
        onPress={() => { 
        Audio.setIsEnabledAsync(false);
        }}>
         <Text style={styles.buttonText}>
          {this.props.text}
         </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
          backgroundColor: 'red',
          marginLeft: 45,
          marginTop: 6,
          borderWidth: 2,
          borderColor: 'cyan',
          alignItems: 'center',
          justifyContent: 'center',
          width: 230,
          height: 45,
          borderRadius: 20,
  },
     
  buttonText: {

  fontSize: 15,
  }
});

export default DJStopbutton;