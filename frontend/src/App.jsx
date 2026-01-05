import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { GoalsProvider } from "./GoalsContext";
import { Loader } from "lucide-react";
import { router } from "./router";

const App = () => {
  const { user, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <GoalsProvider>
      <RouterProvider router={router} />
    </GoalsProvider>
  );
};

export default App;
