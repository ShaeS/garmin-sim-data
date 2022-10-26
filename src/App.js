import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClubDetails from "./pages/ClubDetails";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/club/:club" element={<ClubDetails />} />
    </Routes>
  );
}

export default App;
