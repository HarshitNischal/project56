import * as React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

export default class AppHeader extends React.Component{

render(){
return(
<View style={styles.textContainer}>
<Text style={styles.text}> DJ WhiteHat
</Text>
  <Image
        style={styles.logo}
        source={require('../assets/Headphone.png')}
      />
      <Image
        style={styles.logo1}
        source={require('../assets/Headphone1.png')}
      />
</View>
)
}
}
const styles=StyleSheet.create({
textContainer:{
  backgroundColor:'blue',
},
text:{
  color:'white',
  marginTop:0,
  fontSize:30,
  fontWeight:'bold',
  textAlign:'center',
  padding:20,
},
logo:{
  width:40,
  height:30,
  left:270,
  top:-50,
},
logo1:{
  width:40,
  height:30,
  left:20,
  top:-80,
}
});