import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { themeColors } from '../../constants/colors';

const deviceDimensions = Dimensions.get('window').width;

type NumberContainerProps = {
  text: number;
}

export const NumberContainer: React.FC<NumberContainerProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    padding: deviceDimensions < 375 ? 12 : 24,
    borderColor: themeColors.accent500,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: themeColors.accent500,
    fontSize: 36,
    fontWeight: 'bold'
  }
})