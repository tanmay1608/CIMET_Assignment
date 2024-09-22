import { useState, useEffect, useRef } from "react";
import "./App.css";
import Body from "./components/Body";
import Modal from "./components/Modal";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [editedId, setEditedId] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    const localList = JSON.parse(localStorage.getItem("todoList"));
    if (localList.length !== 0) setTodoList(localList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleDeleteTask = (id) => {
    setIsModalOpen(true);
    setIdToDelete(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    const updatedList = todoList.filter((el) => el.id !== idToDelete);
    setTodoList(updatedList);
    inputRef.current.value = "";
    setEditedId(false);
    setIsModalOpen(false);
  };

  const handleAddTask = () => {
    if (editedId) {
      updateTodoList();
      return;
    }
    if (!inputRef.current.value) {
      alert("Please enter a task to continue.");
      return;
    }
    setTodoList([
      {
        id: `${inputRef.current.value}:${Date.now()}`,
        task: inputRef.current.value,
      },
      ...todoList,
    ]);
    inputRef.current.value = "";
  };

  const updateTodoList = () => {
    const updatedTodoList = todoList.map((task) => {
      return task.id === editedId
        ? {
            id: `${inputRef.current.value}:${Date.now()}`,
            task: inputRef.current.value,
          }
        : task;
    });

    if (!inputRef.current.value) {
      alert("Please enter a task to continue.");
      return;
    }

    setTodoList(updatedTodoList);
    inputRef.current.value = "";
    setEditedId(false);
  };

  const handleEditTask = (id) => {
    const currentTask = todoList.find((task) => task.id === id);
    setEditedId(id);
    inputRef.current.value = currentTask.task;
  };
  return (
    <div className="app">
      <Body
        todoList={todoList}
        inputRef={inputRef}
        editedId={editedId}
        handleAddTask={handleAddTask}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
      {isModalOpen && (
        <Modal
          handleConfirmDelete={handleConfirmDelete}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
