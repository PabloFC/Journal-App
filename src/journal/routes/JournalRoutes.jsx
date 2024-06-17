import { Navigate, Route, Routes } from "react-router-dom";
import JournalPages from "../pages/JournalPages";

const JournalRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<JournalPages />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default JournalRoutes;
