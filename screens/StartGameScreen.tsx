import { TextInput, View, StyleSheet, Alert } from 'react-native'
import { PrimaryButton } from '../components/PrimaryButton';
import { useState } from 'react';
import { themeColors } from '../constants/colors';

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton textButton='Reset' onPress={resetEnteredNumber} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton textButton='Confirm' onPress={confirmEnteredNumber} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    backgroundColor: themeColors.primary800,
    borderRadius: 8,
    elevation: 5, //shadow
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1
  },
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
  }
})