import React, { FC } from "react";

import HTMLReactParser from "html-react-parser";

import { TState } from "src/hooks/api/usePrintBySlug/constants";

import { Image, Button } from "src/atoms";

type Props = {
  printState: TState;
  push: (path: string) => Promise<boolean>;
};

const PrintScreen: FC<Props> = ({ printState }) => {
  const { print, isLoading } = printState;

  if (isLoading) {
    return <>Loading</>;
  }

  if (print) {
    return (
      <div>
        {HTMLReactParser(print.description.html)}

        <Image
          src={print.coverPhoto.url}
          width={print.coverPhoto.width}
          height={print.coverPhoto.height}
        />

        <Button
          onClick={() => {
            console.log("fuck stick");
          }}
        >
          Purchase
        </Button>
      </div>
    );
  }

  return <>Some sort of catch</>;
};

export default PrintScreen;
