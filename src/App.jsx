import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout} />
        <Route path="/" element={<h1>Movies</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
