import { heightScale, widthScale } from "@services/index";
import styled from "styled-components";

interface IProps {
  textColor?: string
  textAlign?: string
  fontSize?: number
  fontWeight?: number | string
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}

export const Text = styled.Text`
 ${(props: IProps) => 
  props?.textColor ? {color : props.textColor} : ''};
  text-align: ${(props: IProps) => 
  props?.textAlign ? props.textAlign : 'justify'};
  fontSize: ${(props: IProps) => 
  props?.fontSize ? props.fontSize + 'px' : '14px'};
  font-weight: ${(props: IProps) => 
  props?.fontWeight ? props.fontWeight : 'regular'};
  margin-top: ${(props: IProps) => 
  props?.marginTop ? heightScale(props.marginTop) + 'px' : 0};
  margin-bottom: ${(props: IProps) => 
  props?.marginBottom ? heightScale(props.marginBottom) + 'px' : 0};
  margin-left: ${(props: IProps) => 
  props?.marginLeft ? heightScale(props.marginLeft) + 'px' : 0};
  margin-right: ${(props: IProps) => 
  props?.marginRight ? heightScale(props.marginRight) + 'px' : 0};
  
`