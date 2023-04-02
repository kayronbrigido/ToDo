import theme from "@config/theme";
import { widthScale } from "@services/index";
import styled from "styled-components";

export const Container = styled.View`
  margin-horizontal: ${widthScale(8)}px;
  flex: 1;
  justify-content: center;
`
