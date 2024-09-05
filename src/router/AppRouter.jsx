import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";
import { useSelector } from "react-redux";
import ChechingAuth from "../ui/components/ChechingAuth";

const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  if (status === "checking") {
    return <ChechingAuth />;
  }

  return (
    <div>
      <Routes>
        {/* Login y Registro */}

        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* JournalApp */}
        <Route path="/*" element={<JournalRoutes />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
