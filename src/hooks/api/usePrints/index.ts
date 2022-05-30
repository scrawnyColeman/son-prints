import { useCallback, useEffect, useState } from "react";
import { fetch } from "src/utils";
import { query } from "./gql";
import { initialState, TPrints, TReturns, TState } from "./constants";

export const usePrints = (): TReturns => {
  const [state, setState] = useState<TState>(initialState);

  const getPrints = useCallback(async () => {
    const { prints } = await fetch<{ prints: TPrints }>(query);
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
