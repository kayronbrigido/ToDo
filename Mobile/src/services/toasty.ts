import Snackbar from 'react-native-snackbar'
import { translator } from './translator'

export const MessageError = (message: string ) => {
  Snackbar.show({
    text: translator(`ERRORS.${message}`),
    duration: Snackbar.LENGTH_SHORT
  })
}