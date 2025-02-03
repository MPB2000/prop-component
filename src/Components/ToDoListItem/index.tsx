import { ReactNode, CSSProperties, useState } from "react";
import Text from "../Text";
import Button from "../Button";

type Props = {
  type: string;
  checked: boolean;
  onChecked: (checked: boolean) => void;
  onDelete: () => void;
  onEdit: (value: string) => void;
  style?: CSSProperties;
  value: string;
};

export default function ToDoListItem({
  type,
  checked,
  onChecked,
  onDelete,
  onEdit,
  value,
}: Props) {
  return (
    <div>
      <input
        type={"checkbox"}
        value={"value"}
        checked={checked}
        onChange={(e) => onChecked(e.target.checked)}
      />
      <Text style={{ textDecoration: checked ? "line-through" : "none" }}>
        {value}
      </Text>
      <Button onClick={() => onEdit(value)}>Edit</Button>
      <Button onClick={onDelete}>Delete</Button>
    </div>
  );
}
