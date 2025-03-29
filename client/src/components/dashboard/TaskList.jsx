import TaskCard from "../task/TaskCard";
import useTaskStore from "../../store/task";

const TaskList = () => {
  const { tasksToDisplay, getFilteredTasks, searchItem, searchTasks } =
    useTaskStore();

  const filteredTasks = getFilteredTasks(tasksToDisplay);
  const searchedTasks = searchTasks(searchItem);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 pb-20"
      role="list"
      aria-label="Task list"
    >
      {searchItem ? (
        searchedTasks.length > 0 ? (
          searchedTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              className="transition-opacity duration-300 hover:scale-[1.02]"
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-[var(--text-secondary)]">No tasks found.</p>
          </div>
        )
      ) : filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            className="transition-opacity duration-300 hover:scale-[1.02]"
          />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-[var(--text-secondary)]">
            No tasks found.{" "}
            {tasksToDisplay === "completed"
              ? "Start completing your tasks!"
              : "Add a new task to get started!"}
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
