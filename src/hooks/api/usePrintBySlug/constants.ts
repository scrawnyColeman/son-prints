import { Print } from "src/constants/API";

export type TReturns = [TState, () => Promise<TPrint>];

export type TPrint = Partial<Print> | undefined | null;

export type TState = {
  print: TPrint;
  isLoading: boolean;
  error?: undefined;
};

export const initialState: TState = {
  print: null,
  isLoading: true,
  error: undefined,
};
