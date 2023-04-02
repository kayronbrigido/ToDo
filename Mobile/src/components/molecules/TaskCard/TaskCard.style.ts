import theme from "@config/theme";
import styled from "styled-components";

export const Container = styled.TouchableOpacity`
  backgroundColor: ${theme.taskCardBackgroundColor}
  border-radius: 5px;
  padding: 10px;
  margin-vertical: 10px;
`

export const Row = styled.View`
  flex-direction: row
`