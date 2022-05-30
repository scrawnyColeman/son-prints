import React, { FC } from "react";
import { TState } from "src/hooks/api/usePrintBySlug/constants";
import { nextPush } from "src/types";

type Props = {
  printState: TState;
  push: nextPush;
};

const PrintScreen: FC<Props> = ({ printState, push }) => {
  const { print, isLoading } = printState;

  return isLoading ? <>Loading</> : <pre>{JSON.stringify(print, null, 2)}</pre>;
};

export default PrintScreen;
