import { Print } from "src/constants/API";

export type TReturns = [TState, () => Promise<TPrints>];

export type TPrints = Print[];

export type TState = {
  prints: TPrints;
  isLoading: boolean;
  error?: string;
};

export type TPrintsResult = {
  prints: TPrints;
};

export const initialState: TState = {
  prints: [],
  isLoading: true,
  error: undefined,
};
