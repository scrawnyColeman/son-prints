import { Url } from "url";

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

export type nextPush = (
  url: Url,
  as?: Url | undefined,
  options?: TransitionOptions | undefined
) => Promise<boolean>;
