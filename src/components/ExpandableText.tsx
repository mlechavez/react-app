import { PropsWithChildren } from "react";
import { useState } from "react";

type Props = {
  maxChars?: number;
};
const ExpandableText = ({
  children,
  maxChars = 100,
}: PropsWithChildren<Props>) => {
  const [expanded, setExpanded] = useState(false);

  const text = expanded
    ? children
    : children.length > maxChars
      ? `${children.substring(0, maxChars)}...`
      : children;

  return (
    <p>
      {text}{" "}
      {children.length >= maxChars && (
        <button type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Less" : "More"}
        </button>
      )}
    </p>
  );
};

export default ExpandableText;
