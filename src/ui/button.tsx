import { ComponentProps, FC } from "react";
import { PlusIcon } from "../assets/icons";
import { Colors } from "../res/colors";

type IconButtonProps = ComponentProps<"button"> & {
  text: string;
  icon?: JSX.Element;
};

export const IconButton: FC<IconButtonProps> = ({
  text,
  icon,
  className,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={`${className} flex justify-center rounded-xl items-center text-white w-40 h-14`}
      style={{ backgroundColor: "#4BA5EC" }}
    >
      {icon ?? <PlusIcon />}
      <span className="ml-1">{text}</span>
    </button>
  );
};
