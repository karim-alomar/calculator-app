import { MouseEventHandler, ReactNode } from "react";

interface ModeType {
  isDark: Boolean;
  handelMode: MouseEventHandler<HTMLButtonElement>;
  iconElement: ReactNode;
}

export const ModeButton = ({ isDark, handelMode, iconElement }: ModeType) => {
  return (
    <button
      className={`button-mode ${isDark && "active"}`}
      onClick={handelMode}
    >
      {iconElement}
    </button>
  );
};
