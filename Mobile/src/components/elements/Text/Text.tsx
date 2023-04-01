import * as S from './Text.style'


interface IProps {
  text: string,
  fontSize?: number
  fontWeight?: number | string
}

const Text = (props: IProps) => {
  return (
    <S.Text 
    fontSize={props.fontSize}
    fontWeight={props.fontWeight}
    >{props.text}</S.Text>
  )
}

export default Text