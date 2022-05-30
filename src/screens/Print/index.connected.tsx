import React from "react";
import { useRouter } from "next/router";
import { usePrintBySlug } from "src/hooks/api/usePrintBySlug";
import Print from "./index";

const PrintConnected = () => {
  const {
    push,
    query: { id },
  } = useRouter();

  const [state] = usePrintBySlug(Array.isArray(id) ? id[0] : id);
  if (state.error) {
    // set error to global alert state
  }
  return (
    <>
      <Print printState={state} push={push} />;
    </>
  );
};

export default PrintConnected;
