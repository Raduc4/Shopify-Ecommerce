import React, { FC } from "react";
import s from "./Swatch.module.css";
import cn from "classnames";

import { isDark } from "@lib/color";

import { Check } from "@components/icons";

interface Props {
  size?: "sm" | "md" | "lg";
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
  onClick: () => void;
  active?: boolean;
}

const Swatch: FC<Props> = ({
  color,
  label,
  variant,
  active,
  size = "md",
  ...rest
}) => {
  label = label?.toLowerCase();
  variant = variant?.toLowerCase();

  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === "size",
    [s.dark]: color && isDark(color),
    [s.sm]: size === "sm",
  });
  return (
    <button
      className={rootClassName}
      style={color ? { backgroundColor: color } : {}}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === "size" ? label : null}
    </button>
  );
};

export default Swatch;
