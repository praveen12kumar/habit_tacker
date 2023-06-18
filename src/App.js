import {Routes, Route} from "react-router-dom" 
import './App.css';
import Home from "./pages/Home"
import Archive from "./pages/Archive";
import HabitPage from "./pages/component/HabitPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:habitId" element={<HabitPage />} />
        <Route path="/archive" element={<Archive />} />

      </Routes>
    </div>
  );
}

export default App;
