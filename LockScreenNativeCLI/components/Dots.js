import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { Neomorph } from 'react-native-neomorph-shadows'
    

function Dots({ dots }){
  
    const dotByStatus = (dotStatus) => dotStatus === 'active' 
    ? (<Neomorph inner style={[styles[dotStatus]]}></Neomorph>) 
    : (<Neomorph  darkShadowColor="rgba(0, 0, 0, .6)" lightShadowColor="rgba(255, 255, 255, .3)" style={[styles[dotStatus]]}></Neomorph>);
    return (
    <View style={styles.dotsContainer}>
        {dots.map((dotStatus, index) => (
            <View key={index} >
              {dotByStatus(dotStatus)}
          </View>
        ))}
    </View>
    )
}   
const styles = StyleSheet.create({

  
  activeDotShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },

  dotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
  },
  dot: {


  },
  active: {
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: .3,
    shadowColor: "rgba(0, 0, 0, 11)",
    shadowRadius: .51,
    borderRadius: 50,
    marginHorizontal: 10,
    backgroundColor: 'rgba(0, 255, 251, 1)',
    width: 15,
    height: 15,
  },
  disable: {
    shadowOpacity: 1, // <- and this or yours opacity
    shadowRadius: 2,
    borderRadius: 50,
    marginHorizontal: 10,
    backgroundColor: 'rgba(44, 50, 62, 1)',
    width: 15,
    height: 15,
  },

});
export default Dots;