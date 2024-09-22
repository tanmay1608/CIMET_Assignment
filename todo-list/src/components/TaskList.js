import TaskItem from "./TaskItem";

const TaskList = ({ todoList, deleteTask, updateTask }) => {
  return (
    <div id="task-list">
      {todoList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
