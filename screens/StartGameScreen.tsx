import { TextInput, View, StyleSheet, Alert, Text } from 'react-native'
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { useState } from 'react';
import { themeColors } from '../constants/colors';
import { Card } from '../components/ui/Card';

type StartGameScreenProps = {
  onPickNumber: (pickNumber: number) => void;
}

export const StartGameScreen: React.FC<StartGameScreenProps> = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>('')

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText)
  }
  const resetEnteredNumber = () => {
    setEnteredNumber('')
  }
  const confirmEnteredNumber = () => {
    const choosenNumber = parseInt(enteredNumber)
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        "Number has to be a number between 1 and 99",
        [{ text: 'Okay', style: 'destructive', onPress: resetEnteredNumber }]
      )
    }
    onPickNumber(choosenNumber)
  }

  return (
    <Card>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton  onPress={resetEnteredNumber}>
            <Text style={styles.buttonText}>Reset</Text>
            </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmEnteredNumber}><Text style={styles.buttonText}>Confirm</Text></PrimaryButton>
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({

  numberInput: {
    height: 50,
    fontSize: 20,
    borderBottomColor: themeColors.accent500,
    borderBottomWidth: 2,
    color: themeColors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    width: 25
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
})