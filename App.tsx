import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { StartGameScreen } from './screens/StartGameScreen';
import { themeColors } from './constants/colors';


export default function App() {
  const [userNumber, setUserNumber] = useState<number>();

  const pickedNumberHandler = (pickNumber: number) => {
    setUserNumber(pickNumber)
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
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
