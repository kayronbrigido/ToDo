import { Appearance } from "react-native"

export const LightTheme = {
  background: '#FFFFFF',
  inputPrimaryBackground: '#b0b0b0',
  inputLabelColor: '#000000',
  inputLabelPrimaryBackground: '#b0b0b0',
  primaryButtonBackground: '#3232ff',
  primaryButtonTextColor: '#FFFFFF',
}

export const DarkTheme = {
  background: '#000000',
  inputPrimaryBackground: '#00000080',
  inputLabelColor: '#000000',
  inputLabelPrimaryBackground: '#000000',
  primaryButtonBackground: '#3232ff',
  primaryButtonTextColor: '#FFFFFF',
}

export default Appearance.getColorScheme() === "dark" ? DarkTheme : LightTheme