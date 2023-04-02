import theme from "@config/theme";
import { widthScale } from "@services/index";
import styled from "styled-components";

export const Container = styled.View`
  margin: ${widthScale(8)}px;
  flex: 1;
`

export const ButtonContainer = styled.View`
  justify-content: flex-end;
  flex: 1;
`

export const Row = styled.View`
  flex-direction: row
  justify-content: space-between
`

export const Modal = styled.Modal`
  justify-content: center;
  align-content: center
`

export const ModalContainer = styled.View`
flex: 1
  justify-content: center;
  align-content: center;
  background-color: #00000090;
  filter: blur(8px)
`

export const ModalBox = styled.View`
  margin: ${widthScale(8)}px;
  justify-content: space-between;
  background-color: ${theme.modalBoxColor};
  padding: 10px
  border-radius: 5px
`
