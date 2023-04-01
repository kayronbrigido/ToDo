import styled from "styled-components";

interface IProps {
  fontSize?: number,
  fontWeight?: number | string
}

export const Text = styled.Text`
  fontSize: ${(props: IProps) => 
  props?.fontSize ? props.fontSize + 'px' : '14px'};
  font-weight: ${(props: IProps) => 
  props?.fontWeight ? props.fontWeight : 'regular'};
`