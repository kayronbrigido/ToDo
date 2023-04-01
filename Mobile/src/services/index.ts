import { Dimensions } from "react-native";


export const fixedNumber = (number: number, decimalPlaces: number): number => {
  return Number.parseInt(Number(number).toFixed(decimalPlaces))
}

export const widthScale = (width: number): number => {
    const screenWidth: number = fixedNumber(Dimensions.get('screen').width, 0);

    return screenWidth * width / 100
}

export const heightScale = (height: number): number => {
  const screenHeight: number = fixedNumber(Dimensions.get('screen').height, 0);

  return screenHeight * height / 100
}

export const handleFocus = (ref: any) => {
  if(ref.current){
     return ref.current.focus();
  }
}