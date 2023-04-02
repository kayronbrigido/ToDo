import { Appearance } from "react-native"

export const LightTheme = {
  background: '#FFFFFF',
  inputPrimaryBackground: '#00000015',
  inputLabelColor: '#000000',
  inputLabelPrimaryBackground: '#00000015',
  primaryButtonBackground: '#3232ff',
  primaryButtonTextColor: '#FFFFFF',
  taskCardBackgroundColor: '#00000015'
}

export const DarkTheme = {
  background: '#000000',
  inputPrimaryBackground: '#00000080',
  inputLabelColor: '#000000',
  inputLabelPrimaryBackground: '#000000',
  primaryButtonBackground: '#3232ff',
  primaryButtonTextColor: '#FFFFFF',
  taskCardBackgroundColor: '#00000080'
}

export default Appearance.getColorScheme() === "dark" ? DarkTheme : LightTheme