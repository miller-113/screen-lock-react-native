import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const DigitButton = ({ digit, onPress, alignSelf, pressed }) => {
  return (
    <TouchableOpacity style={[styles.digitButton, alignSelf && { alignSelf }, pressed && styles.pressed]} onPress={() => onPress(digit.toString())}>
      <Text style={[styles.digit]}>{digit}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
 
  digitButton: {
    margin: 5,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  digit: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 40,
    fontWeight: 600,

    textAlign: 'center',
  },
  pressed: {
    backgroundColor: 'rgba(44, 50, 62, 1)',
    borderRadius: 50,
  },

 
});

export default DigitButton;