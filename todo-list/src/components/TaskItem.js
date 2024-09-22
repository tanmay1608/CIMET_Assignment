import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task, deleteTask, updateTask }) => {
  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  const handleUpdateTask = (id) => {
    updateTask(id);
  };

  return (
    <div id="task-item">
      <p>{task.task}</p>

      <div id="buttonWrapper">
        <FontAwesomeIcon
          className="iconClass"
          icon={faPen}
          onClick={() => {
            handleUpdateTask(task.id);
          }}
        />
        <FontAwesomeIcon
          className="iconClass"
          icon={faTrash}
          onClick={() => {
            handleDeleteTask(task.id);
          }}
        />
      </div>
    </div>
  );
};

export default TaskItem;
