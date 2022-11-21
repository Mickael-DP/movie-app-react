import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { SearchTextContextProvider } from "./context/SearchContextProvider";

import Home from "./pages/Home";
import Details from "./pages/Details";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <SearchTextContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </SearchTextContextProvider>
    </StyledEngineProvider>
  );
}

export default App;
