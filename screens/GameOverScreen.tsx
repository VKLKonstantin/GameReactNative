import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Title } from "../components/ui/Title";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PrimaryButton } from "../components/ui/PrimaryButton";


type GameOverScreenProps = {
  onStartNewGame: () => void;
  userNumber: number;
  roundsNumber: number;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({ onStartNewGame, userNumber, roundsNumber }) => {

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/game-over.jpeg')}
          style={styles.image}
        />
      </View>
      <PrimaryButton onPress={onStartNewGame}>
        <Text>New GAME</Text>
      </PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    borderColor: Colors.primary800,
    borderWidth: 3,
  }

});

{/* <SafeAreaView style={styles.rootScreen}>
        <Title text="Game Over" />
      </SafeAreaView>
    </Image> */}