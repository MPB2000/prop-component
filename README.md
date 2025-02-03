# Prop Component To-Do List

## Overview
This is a React component that implements a simple To-Do List using props. It allows users to create, read, update, and delete (CRUD) tasks efficiently.
I have attempted to make the code as clean as possible with the knowledge I currently possess.

## Features
- **Create**: Add new tasks to the to-do list.
- **Read**: View the list of existing tasks.
- **Update**: Edit an existing task.
- **Delete**: Remove a task from the list.

## Installation
Ensure you have Node.js and React installed. Then, clone this repository and install dependencies:

```sh
npm install
```

## Usage

### Import the Component
```jsx
import ToDoList from './ToDoList';
```

### Using the Component
```jsx
import { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
  return <ToDoList />;
};

export default App;
```

### Functionality
- **Adding a Task**: Click the "Add New Todo" button to open a modal. Enter a task and save it.
- **Editing a Task**: Click the edit button next to a task, modify the text, and save it.
- **Deleting a Task**: Click the delete button next to a task to remove it from the list.
- **Marking as Completed**: Click the checkbox next to a task to mark it as completed or incomplete.


