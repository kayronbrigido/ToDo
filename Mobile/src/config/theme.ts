import { Appearance } from "react-native"

export const LightTheme = {
  background: '#FFFFFF',
  inputPrimaryBackground: '#00000015',
  inputLabelColor: '#000000',
  inputLabelPrimaryBackground: '#00000015',
  primaryButtonBackground: '#3232ff',
  primaryButtonTextColor: '#FFFFFF',
  taskCardBackgroundColor: '#00000015',
  doneTextColor: '#28ad4b',
  pendingTextColor: '#f2020e',
  modalBoxColor: '#c9c9c9',
  iconFill: '#000'
}

export const DarkTheme = {
  background: '#0d0d1d',
  inputPrimaryBackground: '#00000045',
  inputLabelColor: '#000000',
  inputLabelPrimaryBackground: '#000000',
  primaryButtonBackground: '#3232ff',
  primaryButtonTextColor: '#FFFFFF',
  taskCardBackgroundColor: '#00000080',
  doneTextColor: '#28ad4b',
  pendingTextColor: '#f2020e',
  modalBoxColor: '#1F1F1F',
  iconFill: '#FFF'
}

export default Appearance.getColorScheme() === "dark" ? DarkTheme : LightTheme