import TaskList from "./TaskList";

const Body = ({
  todoList,
  inputRef,
  editedId,
  handleAddTask,
  handleEditTask,
  handleDeleteTask,
}) => {
  return (
    <div className="body">
      <h1>Todo List</h1>\
      <div id="input-wrapper">
        <input
          type="text"
          placeholder="Enter your next task..."
          ref={inputRef}
        />
        <button
          onClick={() => {
            handleAddTask();
          }}
        >
          {" "}
          {editedId ? "UPDATE" : "ADD"}
        </button>
      </div>
      <TaskList
        todoList={todoList}
        deleteTask={(id) => {
          handleDeleteTask(id);
        }}
        updateTask={(id) => {
          handleEditTask(id);
        }}
      />
    </div>
  );
};

export default Body;
