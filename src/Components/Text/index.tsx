import { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function Text({ children, style }: Props) {
  return (
    <label
      style={{
        color: "black",
        backgroundColor: "white",
        fontSize: 12,
        ...style,
      }}
    >
      {children}
    </label>
  );
}
