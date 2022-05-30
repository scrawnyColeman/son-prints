import React from "react";
import { useRouter } from "next/router";
import parse from "html-react-parser";

import { usePrints } from "src/hooks/api/usePrints";
import Button from "src/components/Button";

export default function Home() {
  const { push } = useRouter();
  const [prints] = usePrints();

  const _prints = prints
    .filter((p) => p.isActive)
    .map(({ title, description, coverPhoto, id, slug }) => (
      <div
        style={{
          height: 600,
          width: 400,
          borderRadius: "1rem",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        key={id}
      >
        <h1>{title}</h1>
        <div>{parse(description.html)}</div>
        <div>
          <img src={coverPhoto.url} height={400} width={400} />
        </div>
        <Button
          onClick={() => {
            push(`/print/${slug}`);
          }}
        >
          View
        </Button>
      </div>
    ));

  return <div style={{ display: "flex", flexWrap: "wrap" }}>{_prints}</div>;
}
