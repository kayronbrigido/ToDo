import { StyleSheet } from "react-native";
import theme from "@config/theme";

export default StyleSheet.create({
  container: {
    backgroundColor: theme.primaryButtonBackground,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.primaryButtonTextColor
  }
})