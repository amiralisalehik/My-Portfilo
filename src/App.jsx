import {Home} from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { Toaster } from "./Components/ui/toaster";

function App() {
  return (
    <>
    <Toaster></Toaster>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
