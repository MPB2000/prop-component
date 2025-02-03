import { ReactNode, CSSProperties, ChangeEvent } from "react";

type Props = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  style?: CSSProperties;
};

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  style,
}: Props) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || "Enter your todo"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        color: "blue",
        backgroundColor: "lightblue",
        fontSize: 12,
        padding: "8px",
        boxSizing: "border-box",
        ...style,
      }}
    />
  );
}
