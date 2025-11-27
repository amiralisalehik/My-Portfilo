import {Home} from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { Toaster } from "./Components/ui/toaster";
import { AboutMe } from "./Pages/AboutMe";

function App() {
  return (
    <>
    <Toaster></Toaster>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutMe" element={ <AboutMe></AboutMe> } />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
