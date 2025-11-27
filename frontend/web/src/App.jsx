import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsList from "./pages/EventsList";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventsList />} />
        <Route path="/evento/:id" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
