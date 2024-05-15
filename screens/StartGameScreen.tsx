import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState<string>()

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText)
  }

  const checkEnteredNumber = () => {

  }
  const resetEnteredNumber = () => {

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
          <PrimaryButton textButton='Confirm' onPress={checkEnteredNumber} />
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    backgroundColor: 'gray',
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
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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