import { ReactNode } from "react";

interface VisualProps {
  children: ReactNode;
}

export const Visual = ({ children }: VisualProps) => {
  return <div>{children}</div>;
};
