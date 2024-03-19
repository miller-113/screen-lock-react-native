import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
    

function Dots({ dots }){
    return (
    <View style={styles.dotsContainer}>
        {dots.map((dotStatus, index) => (
            <View key={index} >
            {(dotStatus !== 'disable') ? (
                <LinearGradient 
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}
                colors={['rgba(255, 255, 255, .5)', '#00FFFB', 'rgba(0, 0, 0, 0.5)']} 
                style={[styles.dot, styles[dotStatus]]}
                />
                ) : (
                    <View style={[styles.dot, styles[dotStatus], styles.activeDotShadow]}></View>
                    )}
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
    width: 12,
    height: 12,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  active: {
    backgroundColor: 'rgba(0, 255, 251, 1)',
  },
  disable: {
    backgroundColor: 'rgba(44, 50, 62, 1)',
  },

});
export default Dots;