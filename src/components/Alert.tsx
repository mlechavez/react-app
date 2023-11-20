import { PropsWithChildren } from "react";
import { Color } from "../constants";

type Props = {
  color?: Color;
  onClose: () => void;
};
const Alert = ({
  children,
  color = "primary",
  onClose,
}: PropsWithChildren<Props>) => {
  return (
    <div className={`alert alert-${color} alert-dismissible fade show`}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
