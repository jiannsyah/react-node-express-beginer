import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import MsCust from "./pages/mscust/MsCust";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Books />} /> */}
          <Route path="/" element={<MsCust />} />
          {/* <Route path="/add" element={<Add />} /> */}
          {/* <Route path="/update/:id" element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
