import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";
// import { useDispatch, useSelector } from "react-redux";
import ChechingAuth from "../ui/components/ChechingAuth";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { FirebaseAuth } from "../firebase/config";
// import { login, logout } from "../store/auth/authSlice";
import useCheckAuth from "../hooks/useCheckAuth";

const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <ChechingAuth />;
  }

  return (
    <div>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<JournalRoutes />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
        {/* Login y Registro */}

        {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={<JournalRoutes />} /> */}
      </Routes>
    </div>
  );
};

export default AppRouter;
