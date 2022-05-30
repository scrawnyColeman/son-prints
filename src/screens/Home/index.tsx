import React, { FC } from "react";
import { TState } from "src/hooks/api/usePrints/constants";
import { nextPush } from "src/types";

type Props = {
  printsState: TState;
  push: nextPush;
};

const HomeScreen: FC<Props> = ({ push, printsState }) => {
  const { prints, isLoading } = printsState;

  return isLoading ? (
    <>Loading</>
  ) : (
    <pre>{JSON.stringify(prints, null, 2)}</pre>
  );
};

export default HomeScreen;
