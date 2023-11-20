import { PropsWithChildren } from "react";
import { Color } from "../constants";

type Props = {
  color: Color;
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ color, children, onClick }: PropsWithChildren<Props>) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children || "Sample Button"}
    </button>
  );
};

export default Button;
