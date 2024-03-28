import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import DigitButton from './components/DigitButton';
import Dots from './components/Dots';
import NeomorphismButton from './components/NeomorphismButton';

const LockScreen = () => {
  const [password, setPassword] = useState('');
  const [pressedButtons, setPressedButtons] = useState({});

  const [dots, setDots] = useState([
    'disable',
    'disable',
    'disable',
    'disable',
  ]);

  const handleDigitPress = digit => {
    if (password.length < 4) {
      setPassword(password + digit);
      const updatedDots = [...dots];
      updatedDots[password.length] = 'active';
      setDots(updatedDots);
    }
    setPressedButtons({...pressedButtons, [digit]: true});
    setTimeout(() => setPressedButtons({}), 300);
  };
  const handleClearPress = () => {    
    if (password.length > 0) {
      setPassword(password.slice(0, -1));
      const updatedDots = [...dots];
      updatedDots[password.length - 1] = 'disable';
      setDots(updatedDots);
    }
  };
  return (
    <View style={styles.lockScreen}>
      <Text style={styles.title}>Введите пароль</Text>
      <Dots dots={dots}></Dots>
      <View style={styles.digitsContainer}>
        <View style={styles.row}>
          <DigitButton
            digit={1}
            onPress={handleDigitPress}
            pressed={pressedButtons[1]}
          />
          <DigitButton
            digit={2}
            onPress={handleDigitPress}
            pressed={pressedButtons[2]}
          />
          <DigitButton
            digit={3}
            onPress={handleDigitPress}
            pressed={pressedButtons[3]}
          />
        </View>
        <View style={styles.row}>
          <DigitButton
            digit={4}
            onPress={handleDigitPress}
            pressed={pressedButtons[4]}
          />
          <DigitButton
            digit={5}
            onPress={handleDigitPress}
            pressed={pressedButtons[5]}
          />
          <DigitButton
            digit={6}
            onPress={handleDigitPress}
            pressed={pressedButtons[6]}
          />
        </View>
        <View style={styles.row}>
          <DigitButton
            digit={7}
            onPress={handleDigitPress}
            pressed={pressedButtons[7]}
          />
          <DigitButton
            digit={8}
            onPress={handleDigitPress}
            pressed={pressedButtons[8]}
          />
          <DigitButton
            digit={9}
            onPress={handleDigitPress}
            pressed={pressedButtons[9]}
          />
                
          <View

            style={[styles.clearButton]}>
            <NeomorphismButton onClick={handleClearPress}/>        
          </View>
          
        </View>
        <View style={[styles.row, {justifyContent: 'center'}]}>
          <DigitButton
            digit={0}
            onPress={handleDigitPress}
            pressed={pressedButtons[0]}
            alignSelf="center"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lockScreen: {
    flex: 1,
    backgroundColor: 'rgba(23, 27, 38, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'rgba(0, 255, 251, 1)',
    fontSize: 24,
    marginBottom: 20,
  },
  digitsContainer: {
    marginBottom: 30,
    gap: 20,
  },
  row: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  clearButton: {
    position: 'absolute',
    bottom: -75,
    right: 20,
    width: 'auto',
  },

});

export default LockScreen;
