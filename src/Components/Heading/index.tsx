import { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function Heading({ children, style }: Props) {
  return (
    <h1
      style={{
        color: "blue",
        backgroundColor: "lightblue",
        fontSize: 48,
        ...style,
      }}
    >
      {children}
    </h1>
  );
}
