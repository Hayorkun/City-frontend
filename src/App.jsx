import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage"

// const LandingPage = lazy(() => import("./pages/landingPage"));
const RoomAndSuites = lazy(() => import("./pages/RoomAndSuites"));
const DiningPage = lazy(() => import("./pages/DiningPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rooms-suites" element={<RoomAndSuites />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/booking" element={<BookingPage/>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
