import { useCallback, useEffect, useState } from "react";

import { fetch } from "src/utils";

import { query } from "./gql";
import {
  initialState,
  TReturns,
  TState,
  TPrintBySlugResult,
  TPrintBySlugVariables,
} from "./constants";

export const usePrintBySlug = (slug?: string): TReturns => {
  const [state, setState] = useState<TState>(initialState);

  const getPrintBySlug = useCallback(async () => {
    const { print } = await fetch<TPrintBySlugResult, TPrintBySlugVariables>(
      query,
      {
        slug: slug ?? "",
      }
    );
    return print;
  }, [slug]);

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
