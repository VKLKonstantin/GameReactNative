import { View, Text, Pressable, StyleSheet } from 'react-native'
import { themeColors } from '../../constants/colors';
import { ReactNode } from 'react';

type PrimaryButtonProps = {
  onPress: () => void;
  children?: ReactNode
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, children }) => {
  return (
    <View style={styles.outContainer}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed
        ? [styles.innerContainer, styles.pressed]
        : styles.innerContainer}
        android_ripple={{ color: themeColors.primary600 }}>
        {children}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    margin: 4
  },
  innerContainer: {
    backgroundColor: themeColors.primary500,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  pressed: {
    opacity: 0.75
  }
})