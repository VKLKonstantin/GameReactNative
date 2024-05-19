import { Text, StyleSheet } from 'react-native'
import { themeColors } from '../constants/colors';

type TitleProps = {
  text: string;
}
const Title: React.FC<TitleProps> = ({ text }) => {
  return (
        <Text style={styles.title}>
          {text}
        </Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    color: themeColors.accent500,
    fontWeight: "bold",
    fontSize: 18, 
    borderWidth: 2,
    padding: 5,
    borderColor: themeColors.accent500,
  }
})