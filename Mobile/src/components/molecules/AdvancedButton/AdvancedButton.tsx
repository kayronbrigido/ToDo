import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Style from './AdvancedButton.style';
import { heightScale, widthScale } from '@services/index';

interface IProps {
  text: string,
  onSubmit: any
  disable?: boolean,
  marginVertical?: number
  marginHorizontal?: number
  paddingHorizontal?: number,
  paddingVertical?: number

}

const AdvancedButton = React.forwardRef((props: IProps, ref: React.Ref<TouchableOpacity>) => {

  return (
    <TouchableOpacity
      onPress={props.onSubmit}
      style={[
        Style.container,
        {
          marginHorizontal: props.marginHorizontal ? widthScale(props.marginHorizontal) : 0,
          marginVertical: props.marginVertical ? heightScale(props.marginVertical) : heightScale(1),
          paddingHorizontal: props.paddingHorizontal ? props.paddingHorizontal : 15,
          paddingVertical: props.paddingVertical ? props.paddingVertical : 15,
        }
      ]}>
      <Text style={Style.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}
)

export default AdvancedButton;