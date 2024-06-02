import { FC, ReactNode, memo } from "react";
import { StyleSheet, View } from "react-native";
import { themeColors } from "../../constants/colors";

type CardProps = {
  children?: ReactNode;
}

export const Card: FC<CardProps> = memo(({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
})

const styles = StyleSheet.create({
  card: {
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
  }
})