import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

export const GameScreen = () => {

  return (
    <View style={styles.screen}>
      <Title text="Opponet`s Guess" />
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LOG Round</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
})