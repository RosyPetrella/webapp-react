import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
