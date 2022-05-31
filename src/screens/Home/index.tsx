import React, { FC } from "react";
import HTMLReactParser from "html-react-parser";

import { TState } from "src/hooks/api/usePrints/constants";

import { Image, Button } from "src/atoms";

import { PathNames } from "src/constants/constants";

type Props = {
  printsState: TState;
  push: (path: string) => Promise<boolean>;
};

const HomeScreen: FC<Props> = ({ push, printsState }) => {
  const { prints, isLoading } = printsState;

  if (isLoading) {
    return <>Loading</>;
  }

  if (prints.length) {
    return (
      <div>
        {prints.map(({ id, title, description, slug, coverPhoto }) => (
          <div key={id}>
            <span>{title}</span>
            {HTMLReactParser(description.html)}
            <Image src={coverPhoto.url} />
            <Button
              onClick={() => {
                push(`${PathNames.PRINT}/${slug}`);
              }}
            >
              View
            </Button>
          </div>
        ))}
      </div>
    );
  }

  return <>Some catch all</>;
};

export default HomeScreen;
