import Button from "./Components/Button";
import Heading from "./Components/Heading";
import Text from "./Components/Text";
import ToDoList from "./Components/ToDoList";
import "./styles.css";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Heading>To Do List</Heading>
      <ToDoList />
    </div>
  );
}
