import * as S from './Text.style'


interface IProps {
  text: string,
  textColor?: string
  fontSize?: number
  fontWeight?: number | string
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}

const Text = (props: IProps) => {
  return (
    <S.Text
      fontSize={props.fontSize}
      textColor={props.textColor}
      fontWeight={props.fontWeight}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}

    >{props.text}</S.Text>
  )
}

export default Text