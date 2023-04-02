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
