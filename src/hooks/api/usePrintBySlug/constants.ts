import { Print } from "src/constants/API";

export type TReturns = [TState, () => Promise<TPrint>];

export type TPrint = Print | null | undefined;

export type TState = {
  print: TPrint;
  isLoading: boolean;
  error?: undefined;
};

export type TPrintBySlugResult = {
  print: TPrint;
};

export type TPrintBySlugVariables = {
  slug: string;
};

export const initialState: TState = {
  print: undefined,
  isLoading: true,
  error: undefined,
};
