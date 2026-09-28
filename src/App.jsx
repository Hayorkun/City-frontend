import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const LandingPage = lazy(() => import("./pages/landingPage"));
const RoomAndSuites = lazy(() => import("./pages/RoomAndSuites"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rooms-suites" element={<RoomAndSuites />} />
      </Routes>
    </Suspense>
  );
}

export default App;