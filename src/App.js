import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  />
          <Route path="/contact"  />
          <Route path="/menu" />
        </Routes>
      </BrowserRouter>

   
    </div>
  );
};
export default App;
