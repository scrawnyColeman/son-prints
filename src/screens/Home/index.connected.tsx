import React from "react";
import { useRouter } from "next/router";

import { usePrints } from "src/hooks/api/usePrints";
import HomeScreen from ".";

const HomeConnected = () => {
  const { push } = useRouter();
  const [state] = usePrints();

  if (state.error) {
    // set error to global alert state
  }

  console.log("HOMECONNECTED");

  return <HomeScreen printsState={state} push={push} />;
};

export default HomeConnected;
