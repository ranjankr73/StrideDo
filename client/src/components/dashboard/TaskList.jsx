import TaskCard from '../task/TaskCard';
import useTaskStore from '../../store/task';

const TaskList = () => {
  const { selectedFilter, getFilteredTasks } = useTaskStore();
  const filteredTasks = getFilteredTasks(selectedFilter);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTasks.map(task => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;