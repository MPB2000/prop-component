import { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
  onClick: () => void;
};

export default function Button({ children, style, onClick }: Props) {
  return (
    <button
      style={{
        color: "red",
        backgroundColor: "black",
        fontSize: 12,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
