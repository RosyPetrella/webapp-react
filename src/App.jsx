import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/Details";
import { GlobalProvider } from "./GlobalContentx";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={MovieDetails} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
