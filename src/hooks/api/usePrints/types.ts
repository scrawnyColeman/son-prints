import { Print } from "src/constants/API";

export type TReturns = [TState, () => Promise<TState>];

export type TState = Partial<Print>[];
