import { View, Text, Pressable, StyleSheet } from 'react-native'

type PrimaryButtonProps = {
  textButton: string;
  onPress: () => void;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ textButton, onPress }) => {
  return (
    <View style={styles.outContainer}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed
        ? [styles.innerContainer, styles.pressed]
        : styles.innerContainer}
        android_ripple={{ color: '#763a3a' }}>
        <Text style={styles.buttonText}>
          {textButton}
        </Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  outContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    margin: 4
  },
  innerContainer: {
    backgroundColor: '#72063c',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})