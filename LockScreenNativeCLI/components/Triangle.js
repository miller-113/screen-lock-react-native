import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Triangle = props => {
    return <View style={[styles.triangle, props.style]} />;
};

const styles = StyleSheet.create({

  triangleLeft: {
    transform: [{rotate: '-90deg'}],
  },
    triangle: {
    width: 35,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 20.2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(35, 39, 49, 1)',
    position: 'absolute',
    left: -27.3,
  },
})

export default Triangle;