import { useCallback, useEffect, useState } from "react";
import { fetch } from "src/utils";
import { query } from "./gql";
import { initialState, TPrintsResult, TReturns, TState } from "./constants";

export const usePrints = (): TReturns => {
  const [state, setState] = useState<TState>(initialState);

  const getPrints = useCallback(async () => {
    const { prints } = await fetch<TPrintsResult>(query);
    return prints;
  }, []);

  useEffect(() => {
    (async () => {
      const prints = await getPrints();
      setState({ prints, isLoading: false, error: undefined });
    })();
  }, []);

  return [state, getPrints];
};
