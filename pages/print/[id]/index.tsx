import { useRouter } from "next/router";
import React from "react";
import { usePrintBySlug } from "src/hooks/api/usePrintBySlug";

const Print = () => {
  const {
    query: { id },
  } = useRouter();

  const [print] = usePrintBySlug(Array.isArray(id) ? id[0] : id);

  return (
    <div>
      Slug: {id}
      <pre>{JSON.stringify(print, null, 2)}</pre>
    </div>
  );
};

export default Print;
