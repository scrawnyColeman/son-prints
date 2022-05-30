import { useCallback, useEffect, useState } from "react";
import { fetch } from "src/utils";
import { query } from "./gql";
import { TReturns, TPrint } from "./types";

export const usePrintBySlug = (slug?: string): TReturns => {
  const [state, setState] = useState<TPrint>();

  const getPrintBySlug = useCallback(async () => {
    const { print } = await fetch<{ print: TPrint }, { slug: string }>(query, {
      slug: "geralt-of-rivia",
    });
    return print;
  }, []);

  useEffect(() => {
    (async () => {
      if (Boolean(slug)) {
        const result = await getPrintBySlug();
        setState(result);
      }
    })();
  }, [slug]);

  return [state, getPrintBySlug];
};
