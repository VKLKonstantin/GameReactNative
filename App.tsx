import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { StartGameScreen } from './screens/StartGameScreen';
import { themeColors } from './constants/colors';
import { GameOverScreen } from './screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRound, setGuessRound] = useState<number>(0);

  const pickedNumberHandler = (pickNumber: number) => {
    setUserNumber(pickNumber)
    setGameIsOver(false)
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(true);
    setGuessRound(0);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  const gameOverGameHandler = () => {
    setGameIsOver(true)
  }
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverGameHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRound} onStartNewGame={startNewGameHandler} />
  }


  return (
    <>
      <StatusBar style='dark'/>
      <LinearGradient colors={[themeColors.primary700, themeColors.accent500,]} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/game2.jpeg')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.25
  }
});
