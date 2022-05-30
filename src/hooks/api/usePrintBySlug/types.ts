import { Print } from "src/constants/API";

export type TReturns = [TPrint, () => Promise<TPrint>];

export type TPrint = Partial<Print> | undefined | null;
