import { useForm } from "react-hook-form";
import useTaskStore from "../store/task";

const TaskForm = ({ task, onClose }) => {
  const dateTime = () => {
    const d = new Date(task?.dueDate) || new Date();
    const date = d.toLocaleString('en-IN', { hour12: false, year: 'numeric', month: '2-digit', day: '2-digit' }).split('/').reverse().join('-');
    const time = d.toLocaleString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
    return date + 'T' + time;
  }

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      dueDate: dateTime() || "",
      priority: task?.priority || "low",
    },
  });

  const { createTask, updateTask } = useTaskStore();

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    try {
      const dueDate = new Date(data.dueDate);
      const taskData = { ...data, dueDate };
      
      if (task?._id) {
        await updateTask(task._id, taskData);
      } else {
        await createTask(taskData);
      }
      handleClose();
    } catch (error) {
      console.log("Form submission failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[var(--background)] rounded-xl p-6 w-full max-w-lg border border-[var(--border-color)] shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            {task?._id ? "Edit Task" : "New Task"}
          </h2>
          <button
            onClick={handleClose}
            className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <input
              {...register("title", { required: true })}
              placeholder="Task title"
              className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] placeholder-[var(--text-secondary)]"
            />
          </div>

          <div className="space-y-1">
            <textarea
              {...register("description")}
              placeholder="Description"
              rows="4"
              className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] placeholder-[var(--text-secondary)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <input
                type="datetime-local"
                {...register("dueDate", { required: true })}
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              />
            </div>
            
            <div className="space-y-1">
              <select
                {...register("priority")}
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6">
            <button
              type="button"
              onClick={handleClose}
              className="px-5 py-2.5 text-[var(--text-secondary)] hover:bg-[var(--background-hover)] rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
            >
              {task ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;