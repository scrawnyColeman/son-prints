import styled, { keyframes } from "styled-components";
import { Spinner3 } from "@styled-icons/evil/Spinner3";

import { colors } from "src/tokens";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledImageLoader = styled(Spinner3)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${rotate360} 3s linear infinite;
  transform: translateZ(0);

  color: ${colors.accent};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;

  background-color: ${colors.background};

  background-size: cover;
`;

export const StyledImageWrapper = styled.div`
  position: relative;

  height: 594px; // In proportion with A4 Dimensions
  width: 420px; // In proportion with A4 Dimensions
`;
