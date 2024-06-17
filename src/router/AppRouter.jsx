import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";

const AppRouter = () => {
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
