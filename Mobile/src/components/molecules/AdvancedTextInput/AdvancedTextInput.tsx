import React from 'react';
import { View, TextInput } from 'react-native';
import Style from './AdvancedTextInput.style';
import { heightScale, widthScale } from '@services/index';

interface IProps {
  label?: string
  text?: string,
  placeholder?: string,
  editable?: boolean,
  onChange?: any
  onSubmitEditing?: any
  marginVertical?: number
  marginHorizontal?: number
  secret?: boolean
}

const AdvancedTextInput = React.forwardRef((props: IProps, ref: React.Ref<TextInput>) => {

  return (
    <View style={[
      Style.container,
      {
        marginHorizontal: props.marginHorizontal ? widthScale(props.marginHorizontal) : 0,
        marginVertical: props.marginVertical ? heightScale(props.marginVertical) : heightScale(1)
      }
    ]}>
      <TextInput
        ref={ref}
        style={Style.text}
        value={props.text}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        onSubmitEditing={props.onSubmitEditing}
        secureTextEntry={props.secret}
      />
    </View>
  )
}
)

export default AdvancedTextInput;