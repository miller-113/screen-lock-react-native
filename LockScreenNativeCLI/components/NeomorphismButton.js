import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import { Neomorph } from "react-native-neomorph-shadows";

const NeomorphismButton = () => {
  const [isDown, setIsDown] = useState(false);
  
  const handlePressIn = useCallback(() => { setIsDown(true) }) 
  const handlePressOut = useCallback(() => { setIsDown(false) }) 


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <View style={styles.button}>
          {isDown ? (
            <Neomorph
              inner
              useArt
              darkShadowColor="rgba(0, 0, 0, 1)"
              lightShadowColor="rgba(255, 255, 255, 1)"
              style={{
                shadowOffset: { width: 3, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 8,
                borderRadius: 10,
                backgroundColor: "rgba(35, 39, 49, .3)",
                width: 60,
                height: 40,
              }}
            >
              <Neomorph
                inner
                style={{
                  shadowRadius: 7,
                  borderRadius: 10,
                  backgroundColor: "rgba(35, 39, 49, 1)",
                  width: 57,
                  height: 38,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.text}>X</Text>
              </Neomorph>
            </Neomorph>
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
