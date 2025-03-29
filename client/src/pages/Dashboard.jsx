import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import useTaskStore from '../store/task';
import { useEffect } from 'react';
import TaskList from '../components/dashboard/TaskList';
import Controls from '../components/dashboard/Controls';
const Dashboard = () => {
  const { getTasks } = useTaskStore();

  useEffect(() => {
    const getAllTasks = async () => {
      await getTasks();
    }

    getAllTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8 ml-64 mt-16 flex flex-col">
          <TaskList/>
          <Controls />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;