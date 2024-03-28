import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import Svg, { Polygon } from "react-native-svg";


import { Canvas, Path, Shadow, RoundedRect } from "@shopify/react-native-skia";

const NeomorphismButton = ({onClick}) => {
  const [isDown, setIsDown] = useState(false);
  
  const handlePressIn = useCallback(() => { 
    onClick()
    setIsDown(true) 
  }) 
  const handlePressOut = useCallback(() => { setIsDown(false) }) 

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <View style={styles.button}>
          {isDown ? (
            <View style={{position: 'relative',top: -20, right: -5}}>
              <Canvas width={60} height={60} borderRadius={0}>
                  <Shadow dx={3} dy={3} blur={4} color="rgba(0, 0, 0, 1)"  inner  />
        
                  <Path
                    path="M 52 21 L 57 24 L 60 30 L 60 51 L 57 56 L 52 59 L 20 59 L 0 42 L 0 40 L 20 21 Z"
                    color={'rgba(35, 39, 49, 1)'}
                    strokeWidth={10}
                  />
                  <RoundedRect x={21} y={57} width={34} height={1} r={10} color="rgba(255, 255, 255, 1)">
                    <Shadow dx={0} dy={0} blur={2} color="rgba(255, 255, 255, .4)"  shadowOnly />
                  </RoundedRect>
                  <RoundedRect x={60} y={7} r={20} width={1} height={28} color="rgba(255, 255, 255, 1)">
                    <Shadow dx={-5} dy={20} blur={2} color="rgba(255, 255, 255, .4)"  shadowOnly />
                  </RoundedRect>

              </Canvas>
              <Text style={styles.text2}>X</Text>
            </View>
          ) : (
            <>
              <Svg style={[styles.buttonInnerInset]} height="40" width="60">
                <Polygon
                  points="20,0 200,0 200,200 180, 200 0,20"
                  fill="rgba(35, 39, 49, 1)"
                />
              </Svg>
              <Svg style={styles.buttonOutterInset} height="40" width="60">
                <Polygon
                  points="20,0 200,0 200,200 180,200 0,20"
                  fill="rgba(35, 39, 49, 1)"
                />
              </Svg>
              <Text style={styles.text}>X</Text>
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

  },
  button: {
    borderRadius: 50,
    position: "relative",
    height: 40,
    width: 60,
  },
  text: {
    zIndex: 2,
    color: "white",
    textAlign: "center",
    padding: 8,
    paddingLeft: 25,
    fontSize: 20,
    fontWeight: "600",
  },
  text2: {
    position: 'absolute',
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    top: 28,
    right: 18
  },
  buttonOutter: {
    position: "absolute",
    top: 0,
    shadowOffset: { width: -2, height: -2 },
    shadowColor: "rgba(255, 255, 255, .2)",
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  buttonInner: {
    position: "absolute",
    top: 0,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  buttonOutterInset: {
    position: "absolute",
    top: 0,
    shadowOffset: { width: -2, height: -2 },
    shadowColor: "rgba(255, 255, 255, .2)",
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  buttonInnerInset: {
    position: "absolute",
    top: 0,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 1,
    shadowRadius: 8,
  },
});

export default NeomorphismButton;
