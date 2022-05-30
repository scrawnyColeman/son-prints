import { colors, typography } from "src/tokens";
import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  outline: none;
  color: ${colors.textPrimary};
  background-color: ${colors.background};
  padding: 6px 1rem;
  border-radius: 6px;
  font: ${typography.toothThicc};
`;
