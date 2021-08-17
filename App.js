import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
import AppHeader from './components/AppHeader'
import DJbutton from './components/SoundButton'
import DJbutton1 from './components/SoundButton1'
import DJbutton2 from './components/SoundButton2'
import DJbutton3 from './components/SoundButton3'
import DJStopbutton from './components/StopSoundButton'



export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:1}}>
      <AppHeader/>
       <DJbutton 
          uri="http://www.accesscontrolsales.com/Ingram_Products/mp3/pb525dch-x.mp3"
          text="Press Me"
          bgcolor="purple"
        />
        <DJbutton1 
          uri="http://starmen.net/mother2/soundfx/hypno.wav"
          text="Press Me"
          bgcolor="blue"
        />
        <DJbutton2 
           uri="http://www.cs.fsu.edu/~myers/cis3931/notes/deitel/Elevator/com/deitel/jhtp5/elevator/view/sounds/bell.wav"
          text="Press Me"
          bgcolor="yellow"
        />
        <DJbutton3 
          uri="http://www.fun-lover.com/music/wavs/fireworks.wav"
          text="Press Me"
          bgcolor="green"    
        />
        <DJStopbutton  
          text="STOP MUSIC"
          bgcolor="red"    
        />         
      </View>
    );
  }
}