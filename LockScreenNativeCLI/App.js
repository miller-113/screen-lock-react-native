import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DigitButton from './components/DigitButton';
import Dots from './components/Dots';
import { Shadow } from 'react-native-neomorph-shadows';
import ShadowNeomorph from './components/ShadowNeomorph';
import Triangle from './components/Triangle';
import { Neomorph } from 'react-native-neomorph-shadows';

const LockScreen = () => {
  const [password, setPassword] = useState('');
  const [dots, setDots] = useState([
    'disable',
    'disable',
    'disable',
    'disable',
  ]);
  const [pressedButtons, setPressedButtons] = useState({});

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
 
      <Text style={styles.title}>    
        Введите пароль</Text>
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
          <TouchableOpacity
            style={[styles.clearButton, styles.boxWithShadow]}
            onPress={handleClearPress}>
            {/* <Triangle style={[styles.triangleLeft]} /> */}
            <Neomorph
              inner // <- enable inner shadow
              // useArt // <- set this prop to use non-native shadow on ios
              style={[{
                shadowOffset: {width: 30, height: 30},
                shadowOpacity: 1,
                // shadowColor: "grey",
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: 'white',
                // width: 100,
                height: 100,
                // ...include most of View/Layout styles
              }, styles.triangleLeft, styles.triangle]}
            >

            </Neomorph>

            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity> 

    
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
      <View style={{position: 'relative'}}>
        
      <Neomorph
          inner // <- enable inner shadow
          swapShadows // <- set this prop to use non-native shadow on ios
          darkShadowColor="black" // <- set this
          lightShadowColor="rgba(96, 97, 98, .3);" // <- this
          style={[{
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 1,
            shadowRadius: 3,
            backgroundColor: 'rgba(35, 39, 49, 1)',
            width: 40,
            height: 40,
            top: 0,
          }, styles.triangle, styles.triangleLeft]}
        >
        </Neomorph>
        <Neomorph
          inner // <- enable inner shadow
          swapShadows // <- set this prop to use non-native shadow on ios
          darkShadowColor="black" // <- set this
          lightShadowColor="rgba(96, 97, 98, .3);" // <- this
          style={[{
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 1,
            shadowRadius: 3,
            backgroundColor: 'rgba(35, 39, 49, 1)',
            width: 40,
            height: 40,
            top: 0,
          }]}
        >
        </Neomorph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clearButtonPressed: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  boxWithShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  boxWithShadow2: {
    shadowColor: 'white',
    shadowOffset: {
      width: -2,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  boxWithShadow3: {
    shadowColor: 'white',
    shadowOffset: {
      width: 3,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  triangleLeft: {
    transform: [{rotate: '-90deg'}],
  },
  triangle: {
    width: 35,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 17,
    borderRightWidth: 17,
    borderBottomWidth: 15.2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(35, 39, 49, 1)',
    position: 'absolute',
    left: -32.5,
  },
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
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(35, 39, 49, 1)',
  },
  clearButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 30,
  },
});

export default LockScreen;
