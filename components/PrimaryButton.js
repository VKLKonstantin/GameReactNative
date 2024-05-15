import { View, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton({ children }) {
  function pressHandler() {

  }
  return (
    <View style={styles.outContainer}>
      <Pressable onPress={pressHandler} style={({ pressed }) => pressed 
      ? [styles.innerContainer, styles.pressed] 
      : styles.innerContainer} 
      android_ripple={{ color: '#763a3a' }}>
        <Text style={styles.buttonText}>
          {children}
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