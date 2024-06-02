import { View, Text, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from 'react'
import { Title } from "../components/ui/Title";

import { PrimaryButton } from "../components/ui/PrimaryButton";
import { NumberContainer } from "../components/game/NumberContainer";
import { Ionicons, Entypo } from '@expo/vector-icons';

let minBoundary = 1;
let maxBoundary = 100;

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

type GameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction: 'lower' | 'greater') => {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert('Don`t lie!', 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }])
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess - 1
    } else {
      minBoundary = currentGuess + 1
    }

    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRandomNumber)
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponet`s Guess" />
      <NumberContainer text={currentGuess} />
      <View>
        <Text>Higher or lower?</Text>
        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
          {/* <Ionicons name="remove" size={12} color="white" /> */}
          <Text>-</Text>
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
          {/* <Entypo name="plus" size={24} color="black" /> */}
          <Text> + </Text>
        </PrimaryButton>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40
  },
})