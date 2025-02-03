import { ReactNode, CSSProperties, useState } from "react";
import ToDoListItem from "../ToDoListItem";
import { Modal } from "../Modal";
import Input from "../Input";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

type Type = "create" | "edit";

export default function ToDoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoText, setToDoText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const handleDelete = (id: number) => {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
  };

  const handleEdit = (id: number) => {
    const todoToEdit = todoList.find((todo) => todo.id === id);
    if (todoToEdit) {
      setCurrentTodo(todoToEdit);
      setToDoText(todoToEdit.text);
      setIsModalOpen(true);
    }
  };

  const handleChecked = (id: number) => {
    const updatedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodoList(updatedList);
  };

  const handleAddOrEdit = () => {
    if (currentTodo) {
      const updatedList = todoList.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text: todoText } : todo
      );
      setTodoList(updatedList);
    } else {
      const newTodo = {
        id: todoList.length + 1,
        text: todoText,
        checked: false,
      };
      setTodoList([...todoList, newTodo]);
    }
    setToDoText("");
    setCurrentTodo(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCurrentTodo(null);
            setToDoText("");
            setIsModalOpen(true);
          }}
        >
          Add New Todo
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div>
            <h2>{currentTodo ? "Edit Todo" : "Create New Todo"}</h2>
            <Input value={todoText} onChange={setToDoText} />
            <button onClick={handleAddOrEdit}>Save</button>
          </div>
        </Modal>
      </div>
      {todoList.map((todo) => (
        <ToDoListItem
          key={todo.id}
          type="checkbox"
          checked={todo.checked}
          value={todo.text}
          onChecked={() => handleChecked(todo.id)}
          onDelete={() => handleDelete(todo.id)}
          onEdit={() => handleEdit(todo.id)}
        />
      ))}
    </div>
  );
}
