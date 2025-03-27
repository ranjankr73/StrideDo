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
    <div className="fixed inset-0 bg-slate-600 bg-opacity-20 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">
          {task?._id ? "Edit Task" : "New Task"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("title", { required: true })}
            placeholder="Task title"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            {...register("description")}
            placeholder="Description"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="datetime-local"
              {...register("dueDate", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          
          <select
            {...register("priority")}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
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