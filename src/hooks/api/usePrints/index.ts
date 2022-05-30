import { useCallback, useEffect, useState } from "react";
import { fetch } from "src/utils";
import { query } from "./gql";
import { TReturns, TState } from "./types";

export const usePrints = (): TReturns => {
  const [state, setState] = useState<TState>([]);

  const getPrints = useCallback(async () => {
    const { prints } = await fetch<{ prints: TState }>(query);
    return prints;
  }, []);

  useEffect(() => {
    (async () => {
      const result = await getPrints();
      setState(result);
    })();
  }, []);

  return [state, getPrints];
};
