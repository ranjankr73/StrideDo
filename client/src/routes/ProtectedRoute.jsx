import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../store/auth';

const ProtectedRoute = () => {
  const { currentUser, loading } = useAuthStore();

  if(loading){
    return <div>Loading...</div>
  }
  
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRoute;