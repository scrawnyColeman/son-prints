import React, {
  FC,
  useState,
  ImgHTMLAttributes,
  ReactEventHandler,
} from "react";

import {
  StyledImage,
  StyledImageLoader,
  StyledImageWrapper,
} from "./Image.styled";

export type Props = ImgHTMLAttributes<HTMLImageElement> & {};

const Image: FC<Props> = ({ onLoad, ...rest }) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const handleLoaded: ReactEventHandler<HTMLImageElement> = (e) => {
    if (typeof onLoad === "function") {
      onLoad(e);
    }

    setLoading(false);
  };

  return (
    <StyledImageWrapper>
      {isLoading && <StyledImageLoader />}
      <StyledImage {...rest} onLoad={handleLoaded} />
    </StyledImageWrapper>
  );
};

export default Image;
