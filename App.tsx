import React, { createRef, RefObject } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const AnimatedFontAwesome = Animatable.createAnimatableComponent(FontAwesome);

export default function App() {
  const ButtonRef: RefObject<any> = createRef();

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={{ marginBottom: 15 }}
        animation="pulse"
        useNativeDriver
        iterationCount={Infinity}
      >
        TEXTO ANIMADO
      </Animatable.Text>

      <View style={{ marginBottom: 50 }}>
        <AnimatedFontAwesome
          name="bell"
          size={52}
          color="black"
          animation="tada"
          useNativeDriver
          iterationCount={Infinity}
        />

        <View style={{ top: 0, position: "absolute", right: -5, height: 10 }}>
          <Text style={{ fontSize: 15 }}>10</Text>
        </View>
      </View>

      <TouchableWithoutFeedback onPress={() => ButtonRef.current.bounce()}>
        <Animatable.View
          style={{
            backgroundColor: "#379fff",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            height: 40,
          }}
          animation="bounceInUp"
          useNativeDriver
          duration={2000}
          ref={ButtonRef}
        >
          <Text style={{ color: "#fff" }}>Botão</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
