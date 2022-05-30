import { useCallback, useEffect, useState } from "react";
import { fetch } from "src/utils";
import { query } from "./gql";
import { TReturns, TPrint, initialState, TState } from "./constants";

export const usePrintBySlug = (slug?: string): TReturns => {
  const [state, setState] = useState<TState>(initialState);

  const getPrintBySlug = useCallback(async () => {
    const { print } = await fetch<{ print: TPrint }, { slug: string }>(query, {
      slug: "geralt-of-rivia",
    });
    return print;
  }, []);

  useEffect(() => {
    (async () => {
      if (Boolean(slug)) {
        const print = await getPrintBySlug();
        setState({ print, isLoading: false });
      }
    })();
  }, [slug]);

  return [state, getPrintBySlug];
};
